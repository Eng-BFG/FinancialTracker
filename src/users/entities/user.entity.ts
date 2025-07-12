/* eslint-disable prettier/prettier */
import { Account } from "src/accounts/entities/account.entity";
import { Budget } from "src/budgets/entities/budget.entity";
import { Company } from "src/company/entities/company.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Role, role => role.user, {
        cascade: true, 
        nullable: true, 
        eager: true})
    @JoinColumn()
    role: Role

    @ManyToOne(() => Company, company => company.worker)
    company: Company

    @OneToMany(() => Account, account => account.user)
    accounts: Account[]

    @OneToMany(() => Budget, budget => budget.creator)
    budgets: Budget
}
