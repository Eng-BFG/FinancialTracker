import { Ttype } from "../entities/ttype.enum";
export declare class CreateTransactionDto {
    transaction_type: Ttype;
    amount: number;
    transaction_Date: Date;
    description: string;
    category: string;
    updated_at: Date;
}
