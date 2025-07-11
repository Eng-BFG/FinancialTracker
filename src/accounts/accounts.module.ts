/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { User } from 'src/users/entities/user.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, User, Transaction])
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
