/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @Column({type: 'timestamp'})
    transaction_Date: Date;
    @Column()
    description: string;
    @Column()
    category: string;
    @Column({type: 'timestamp'})
    updated_at: Date;

    @ManyToOne(() => Account, account => account.transactions)
    account: Account
}
