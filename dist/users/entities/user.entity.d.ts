import { Account } from "src/accounts/entities/account.entity";
import { Budget } from "src/budgets/entities/budget.entity";
import { Company } from "src/company/entities/company.entity";
import { Role } from "src/roles/entities/role.entity";
export declare class User {
    user_id: number;
    username: string;
    password_hash: string;
    email: string;
    full_name: string;
    created_at: Date;
    updated_at: Date;
    role: Role;
    company: Company;
    accounts: Account[];
    budgets: Budget;
}
