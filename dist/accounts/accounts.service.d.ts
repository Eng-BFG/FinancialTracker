import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
export declare class AccountsService {
    private readonly accountRepository;
    private readonly userRepository;
    private readonly transactionRepository;
    constructor(accountRepository: Repository<Account>, userRepository: Repository<User>, transactionRepository: Repository<Transaction>);
    create(user_id: number, transaction_id: number, createAccountDto: CreateAccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    findOne(id: number): Promise<Account | null>;
}
