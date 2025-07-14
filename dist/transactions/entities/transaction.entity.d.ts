import { Ttype } from "./ttype.enum";
import { Account } from "src/accounts/entities/account.entity";
export declare class Transaction {
    transaction_id: number;
    transaction_type: Ttype;
    amount: number;
    description: string;
    category: string;
    transaction_Date: Date;
    updated_at: Date;
    account: Account;
}
