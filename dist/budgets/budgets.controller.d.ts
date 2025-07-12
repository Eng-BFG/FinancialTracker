import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
export declare class BudgetsController {
    private readonly budgetsService;
    constructor(budgetsService: BudgetsService);
    create(id: number, createBudgetDto: CreateBudgetDto): Promise<import("./entities/budget.entity").Budget>;
    findAll(): Promise<import("./entities/budget.entity").Budget[]>;
    findOne(id: number): Promise<import("./entities/budget.entity").Budget | null>;
    update(id: string, updateBudgetDto: UpdateBudgetDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
