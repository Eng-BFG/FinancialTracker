import { CreateBudgetitemDto } from './dto/create-budgetitem.dto';
import { UpdateBudgetitemDto } from './dto/update-budgetitem.dto';
import { Budgetitem } from './entities/budgetitem.entity';
import { Repository } from 'typeorm';
import { Budget } from 'src/budgets/entities/budget.entity';
export declare class BudgetitemsService {
    private readonly budgetitemRepository;
    private readonly budgetRepository;
    constructor(budgetitemRepository: Repository<Budgetitem>, budgetRepository: Repository<Budget>);
    create(id: number, createBudgetitemDto: CreateBudgetitemDto): Promise<Budgetitem>;
    findAll(): Promise<Budgetitem[]>;
    findOne(id: number): Promise<Budgetitem | null>;
    update(id: number, updatebudgetitemDto: UpdateBudgetitemDto): Promise<Budgetitem>;
    remove(id: number): Promise<void>;
}
