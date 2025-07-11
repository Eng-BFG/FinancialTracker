/* eslint-disable prettier/prettier */
import { Account } from "src/accounts/entities/account.entity";
import { Budget } from "src/budgets/entities/budget.entity";
import { Company } from "src/company/entities/company.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    username: string;

    @Column()
    password_hash: string;

    @Column()
    email: string;

    @Column()
    full_name: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @OneToOne(() => Role, role => role.user, {nullable: false})
    @JoinColumn()
    role: Role

    @ManyToOne(() => Company, company => company.worker, {nullable: false})
    company: Company

    @OneToMany(() => Account, account => account.user)
    accounts: Account[]

    @OneToMany(() => Budget, budget => budget.creator)
    budgets: Budget
}
