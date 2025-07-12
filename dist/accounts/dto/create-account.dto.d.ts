import { AType } from "../entities/aType.enum";
export declare class CreateAccountDto {
    account_name: string;
    account_type: AType;
    account_number: string;
    current_balance: number;
    currency: string;
}
