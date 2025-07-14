/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ttype } from "./ttype.enum";
import { Account } from "src/accounts/entities/account.entity";

/* eslint-disable prettier/prettier */
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transaction_id: number;
    @Column({
        type: 'enum',
        enum: Ttype,
        default: Ttype.Payment
    })
    transaction_type: Ttype;
    @Column()
    amount: number;
    @Column()
    description: string;
    @Column()
    category: string;
    @CreateDateColumn()
    transaction_Date: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Account, account => account.transactions)
    account: Account
}
