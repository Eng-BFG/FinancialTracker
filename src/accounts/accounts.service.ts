/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account) private readonly accountRepository: Repository<Account>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>
  ){}
  async create(user_id: number, transaction_id: number, createAccountDto: CreateAccountDto) {
    const usedAccount = this.accountRepository.create(createAccountDto)
    const user = await this.userRepository.findOne({
      where: {user_id: user_id},
      relations: ['accounts']
    })
    const transactions = await this.transactionRepository.findOne({
      where: {transaction_id: transaction_id},
      relations: ['account']
    })
    if(!user) {throw new NotFoundException('user not found')}
    if(!transactions) {throw new NotFoundException('transaction not found')}
    if(!usedAccount.transactions){usedAccount.transactions = []}
    usedAccount.transactions.push(transactions)
    return this.accountRepository.save(usedAccount);
  }

  findAll() {
    return this.accountRepository.find();
  }

  findOne(id: number) {
    return this.accountRepository.findOne({
      where: {account_id: id},
      relations: ['transactions']
    });
  }

 
}
