import { Ttype } from "../entities/ttype.enum";
export declare class CreateTransactionDto {
    transaction_type: Ttype;
    amount: number;
    description: string;
    category: string;
}
