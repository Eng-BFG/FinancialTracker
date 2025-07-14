/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BudgetitemsService } from './budgetitems.service';
import { CreateBudgetitemDto } from './dto/create-budgetitem.dto';
import { UpdateBudgetitemDto } from './dto/update-budgetitem.dto';

@Controller('budgetitems')
export class BudgetitemsController {
  constructor(private readonly budgetitemsService: BudgetitemsService) {}

  @Post('/createItem/budget/:id')
  create(@Param('id', ParseIntPipe) id: number,
   @Body() createBudgetitemDto: CreateBudgetitemDto) {
    return this.budgetitemsService.create(id, createBudgetitemDto);
  }

  @Get('/allItems')
  findAll() {
    return this.budgetitemsService.findAll();
  }

  @Get('/oneItem/:id')
  findOne(@Param('id') id: string) {
    return this.budgetitemsService.findOne(+id);
  }

  @Patch('/updateItem/:id')
  update(@Param('id') id: string, @Body() updateBudgetitemDto: UpdateBudgetitemDto) {
    return this.budgetitemsService.update(+id, updateBudgetitemDto);
  }

  @Delete('/deleteItem/:id')
  remove(@Param('id') id: string) {
    return this.budgetitemsService.remove(+id);
  }
}
