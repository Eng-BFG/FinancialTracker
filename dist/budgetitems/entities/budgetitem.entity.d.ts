import { Budget } from "src/budgets/entities/budget.entity";
export declare class Budgetitem {
    budget_item_id: number;
    budget_item_name: string;
    allocated_amount: number;
    for_budget: Budget;
}
