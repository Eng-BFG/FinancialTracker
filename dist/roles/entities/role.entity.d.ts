import { User } from "src/users/entities/user.entity";
export declare class Role {
    role_id: number;
    role_name: string;
    role_description: string;
    user: User;
}
