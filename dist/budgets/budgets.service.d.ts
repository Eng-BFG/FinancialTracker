import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class BudgetsService {
    private readonly budgetRepository;
    private readonly userRepository;
    constructor(budgetRepository: Repository<Budget>, userRepository: Repository<User>);
    create(id: number, createBudgetDto: CreateBudgetDto): Promise<Budget>;
    findAll(): Promise<Budget[]>;
    findOne(id: number): Promise<Budget | null>;
    update(id: number, updateBudgetDto: UpdateBudgetDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
