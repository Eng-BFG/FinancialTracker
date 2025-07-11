import { User } from "src/users/entities/user.entity";
export declare class Company {
    id: number;
    name: string;
    address: string;
    worker: User[];
}
