/* eslint-disable prettier/prettier */
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

/* eslint-disable prettier/prettier */
@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;

    @Column()
    role_name: string;
    
    @Column()
    role_description: string;

    @OneToOne(() => User, user => user.role)
    user: User
}
