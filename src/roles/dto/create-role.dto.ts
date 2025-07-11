/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    role_name: string;
    @IsOptional()
    @IsString()
    role_description: string;
}
