import { Budgetitem } from "src/budgetitems/entities/budgetitem.entity";
import { User } from "src/users/entities/user.entity";
import { Decimal128 } from "typeorm";
export declare class Budget {
    budget_id: number;
    budget_amount: Decimal128;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_date: Date;
    creator: User;
    items: Budgetitem[];
}
