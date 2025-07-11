/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetitemDto } from './dto/create-budgetitem.dto';
import { UpdateBudgetitemDto } from './dto/update-budgetitem.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Budgetitem } from './entities/budgetitem.entity';
import { Repository } from 'typeorm';
import { Budget } from 'src/budgets/entities/budget.entity';

@Injectable()
export class BudgetitemsService {
  constructor(
    @InjectRepository(Budgetitem) private readonly budgetitemRepository: Repository<Budgetitem>,
    @InjectRepository(Budget) private readonly budgetRepository: Repository<Budget>
  ){}
  async create(id: number, createBudgetitemDto: CreateBudgetitemDto) {
    const item = this.budgetitemRepository.create(createBudgetitemDto)
    const budget = await this.budgetRepository.findOne({
      where: {budget_id: id},
      relations: ['items']
    })
    if(!budget){throw new NotFoundException('Budget with id' + {id} + 'Not found')}
    item.for_budget = budget
    return this.budgetitemRepository.save(item);
  }

  findAll() {
    return this.budgetitemRepository.find();
  }

  findOne(id: number) {
    return this.budgetitemRepository.findOne({
      where: {budget_item_id: id},
      relations: ['items']
    });
  }

  update(id: number, updateBudgetitemDto: UpdateBudgetitemDto) {
    return this.budgetitemRepository.update(id, updateBudgetitemDto);
  }

  remove(id: number) {
    return this.budgetitemRepository.delete(id);
  }
}
