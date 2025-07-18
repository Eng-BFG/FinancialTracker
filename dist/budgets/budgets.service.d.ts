import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Budgetitem } from 'src/budgetitems/entities/budgetitem.entity';
export declare class BudgetsService {
    private readonly budgetRepository;
    private readonly userRepository;
    private readonly budgetitemRepository;
    constructor(budgetRepository: Repository<Budget>, userRepository: Repository<User>, budgetitemRepository: Repository<Budgetitem>);
    create(id: number, createBudgetDto: CreateBudgetDto): Promise<Budget>;
    findAll(): Promise<Budget[]>;
    findOne(id: number): Promise<Budget | null>;
    update(id: number, updatebudgetDto: UpdateBudgetDto): Promise<Budget>;
    remove(id: number): Promise<void>;
}
