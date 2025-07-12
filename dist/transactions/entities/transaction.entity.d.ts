import { Ttype } from "./ttype.enum";
import { Account } from "src/accounts/entities/account.entity";
export declare class Transaction {
    transaction_id: number;
    transaction_type: Ttype;
    amount: number;
    transaction_Date: Date;
    description: string;
    category: string;
    updated_at: Date;
    account: Account;
}
