/* eslint-disable prettier/prettier */
import { Budget } from "src/budgets/entities/budget.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Budgetitem {
    @PrimaryGeneratedColumn()
    budget_item_id: number;
    @Column()
    budget_item_name: string;
    @Column({type: 'decimal'})
    allocated_amount: number;
    @ManyToOne(() => Budget, budget => budget.items)
    for_budget: Budget
}
