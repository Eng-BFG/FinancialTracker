/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Budgetitem } from 'src/budgetitems/entities/budgetitem.entity';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget) private readonly budgetRepository: Repository<Budget>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Budgetitem) private readonly budgetitemRepository: Repository<Budgetitem>
  ){}
  async create(id: number, createBudgetDto: CreateBudgetDto) {
    const budget = this.budgetRepository.create(createBudgetDto)
    const user = await this.userRepository.findOne({
      where: {user_id: id},
      relations: ['budgets']
    })
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-plus-operands
    if(!user){throw new NotFoundException('User with ID ${id} does not exist')}
    budget.creator = user
    return this.budgetRepository.save(budget);
  }

  findAll() {
    return this.budgetRepository.find();
  }

  findOne(id: number) {
    return this.budgetRepository.findOne({
      where: {budget_id: id},
      relations: ['budgets', 'for_budget']
    });
  }

  async update(id: number, updatebudgetDto: UpdateBudgetDto): Promise<Budget> {
        const budget = await this.budgetRepository.findOne({
          where: {budget_id: id}
        });
        if (!budget) {
          throw new NotFoundException(`budget with ID ${id} not found`);
        }
        Object.assign(budget, updatebudgetDto);
        return this.budgetRepository.save(budget);
        }
      
        async remove(id: number) {
        const result = await this.budgetRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Item with ID ${id} not found`);
        }
      }
}
