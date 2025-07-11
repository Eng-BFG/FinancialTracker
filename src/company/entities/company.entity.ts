/* eslint-disable prettier/prettier */
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    address: string

    @OneToMany(() => User, user => user.company)
    worker: User[]
}
/* id: number;
    name: string;
    address: string */