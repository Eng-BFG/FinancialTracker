import { Decimal128 } from "typeorm";
export declare class CreateBudgetDto {
    budget_amount: Decimal128;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_date: Date;
}
