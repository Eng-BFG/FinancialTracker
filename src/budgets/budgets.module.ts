/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { User } from 'src/users/entities/user.entity';
import { Budgetitem } from 'src/budgetitems/entities/budgetitem.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget, User, Budgetitem])
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService],
})
export class BudgetsModule {}
