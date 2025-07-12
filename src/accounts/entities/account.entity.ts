/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */

import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AType } from "./aType.enum";
import { Transaction } from "src/transactions/entities/transaction.entity";

/* eslint-disable prettier/prettier */
@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    account_id: number;
    @Column()
    account_name: string;
    @Column({
        type: 'enum',
        enum: AType,
        default: AType.Bank
    })
    account_type: AType;
    @Column()
    account_number: string;
    @Column()
    current_balance: number;
    @Column()
    currency: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, user => user.accounts)
    user: User

    @OneToMany(() => Transaction, transaction => transaction.account)
    transactions: Transaction[];
}


