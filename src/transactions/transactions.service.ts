/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>
  ){}
  create(createTransactionDto: CreateTransactionDto) {
    const newTransaction = this.transactionRepository.create(createTransactionDto)
    return this.transactionRepository.save(newTransaction)
  }

  findAll() {
    return this.transactionRepository.find();
  }

  findOne(id: number) {
    return this.transactionRepository.findOne({
      where: {transaction_id: id},
      relations: ['account']
    })
  }
  async getTotalTransactionsSummary(): Promise<{ count: number; totalAmount: number; }> {
    const result = await this.transactionRepository
      .createQueryBuilder('transaction')
      .select('COUNT(transaction.transaction_id)', 'count') // Assuming 'id' is the PK of Transaction
      .addSelect('SUM(transaction.amount)', 'totalAmount')
      .getRawOne() // Use getRawOne because we are selecting aggregates

    return {
      count: parseInt(result.count) || 0,
      totalAmount: parseFloat(result.totalAmount) || 0,
    }
  
}
    async getCurrentMonthTransactionsSummary(): Promise<{ count: number; totalAmount: number }> {
    const today = new Date();

    // Calculate the start of the current month
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    startOfMonth.setHours(0, 0, 0, 0);

    // Calculate the end of the current month
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Day 0 of next month is last day of current month
    endOfMonth.setHours(23, 59, 59, 999);

    const result = await this.transactionRepository
      .createQueryBuilder('transaction')
      .select('COUNT(transaction.transaction_id)', 'count')
      .addSelect('SUM(transaction.amount)', 'totalAmount')
      .where('transaction.transaction_date BETWEEN :startOfMonth AND :endOfMonth', {
        startOfMonth: startOfMonth,
        endOfMonth: endOfMonth,
      })
      .getRawOne();

    return {
      count: parseInt(result.count) || 0,
      totalAmount: parseFloat(result.totalAmount) || 0,
    };
  }

}