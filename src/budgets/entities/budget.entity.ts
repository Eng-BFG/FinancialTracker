/* eslint-disable prettier/prettier */
import { Budgetitem } from "src/budgetitems/entities/budgetitem.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Decimal128, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    budget_id: number;
    @Column({type: 'decimal'})
    budget_amount: Decimal128;
    @Column({type: 'date'})
    start_date: Date;
    @Column({type: 'date'})
    end_date: Date;
    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    @CreateDateColumn({type: 'timestamp'})
    updated_date: Date;

    @ManyToOne(() => User, user => user.budgets)
    creator: User

    @OneToMany(() => Budgetitem, budgetitem => budgetitem.for_budget)
    items: Budgetitem[]
}
