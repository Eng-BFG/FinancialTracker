import { BudgetitemsService } from './budgetitems.service';
import { CreateBudgetitemDto } from './dto/create-budgetitem.dto';
import { UpdateBudgetitemDto } from './dto/update-budgetitem.dto';
export declare class BudgetitemsController {
    private readonly budgetitemsService;
    constructor(budgetitemsService: BudgetitemsService);
    create(id: number, createBudgetitemDto: CreateBudgetitemDto): Promise<import("./entities/budgetitem.entity").Budgetitem>;
    findAll(): Promise<import("./entities/budgetitem.entity").Budgetitem[]>;
    findOne(id: string): Promise<import("./entities/budgetitem.entity").Budgetitem | null>;
    update(id: string, updateBudgetitemDto: UpdateBudgetitemDto): Promise<import("./entities/budgetitem.entity").Budgetitem>;
    remove(id: string): Promise<void>;
}
