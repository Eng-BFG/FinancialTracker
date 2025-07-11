/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BudgetitemsService } from './budgetitems.service';
import { BudgetitemsController } from './budgetitems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budgetitem } from './entities/budgetitem.entity';
import { Budget } from 'src/budgets/entities/budget.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budgetitem, Budget])
  ],
  controllers: [BudgetitemsController],
  providers: [BudgetitemsService],
})
export class BudgetitemsModule {}
