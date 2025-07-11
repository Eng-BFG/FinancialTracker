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
    return this.transactionRepository.create(createTransactionDto);
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

  
}
