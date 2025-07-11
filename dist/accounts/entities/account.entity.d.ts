import { User } from "src/users/entities/user.entity";
import { AType } from "./aType.enum";
import { Transaction } from "src/transactions/entities/transaction.entity";
export declare class Account {
    account_id: number;
    account_name: string;
    account_type: AType;
    account_number: string;
    current_balance: number;
    currency: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    transactions: Transaction[];
}
