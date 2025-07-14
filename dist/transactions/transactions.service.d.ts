import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
export declare class TransactionsService {
    private readonly transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: number): Promise<Transaction | null>;
    getTotalTransactionsSummary(): Promise<{
        count: number;
        totalAmount: number;
    }>;
    getCurrentMonthTransactionsSummary(): Promise<{
        count: number;
        totalAmount: number;
    }>;
}
