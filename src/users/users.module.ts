/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Company } from 'src/company/entities/company.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { Budget } from 'src/budgets/entities/budget.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Company, Account, Budget])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
