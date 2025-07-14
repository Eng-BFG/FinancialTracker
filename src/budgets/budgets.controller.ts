/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post('/createBudget/user/:id')
  create(@Param('id') id: number, 
  @Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.create(id, createBudgetDto);
  }

  @Get('/allbudgets')
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get('/oneBudget/:id/user/:user_id')
  findOne(@Param('id') id: number) {
    return this.budgetsService.findOne(+id);
  }

  @Patch('/updatingBudget/:id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetsService.update(+id, updateBudgetDto);
  }

  @Delete('/deletingBudget/:id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(+id);
  }
}
