import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): Promise<import("./entities/transaction.entity").Transaction>;
    findAll(): Promise<import("./entities/transaction.entity").Transaction[]>;
    findOne(id: string): Promise<import("./entities/transaction.entity").Transaction | null>;
    getTotalSummary(): Promise<{
        count: number;
        totalAmount: number;
    }>;
    getMonthlySummary(): Promise<{
        count: number;
        totalAmount: number;
    }>;
}
