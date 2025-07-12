/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUserDto {
        @IsString()
        @IsNotEmpty()
        username: string;

        @IsString()
        @IsStrongPassword()
        @MaxLength(8, {message: 'Password must be 8 characters'})
        password_hash: string;
    
        @IsEmail()
        @IsNotEmpty()
        email: string;
    
        @IsString()
        @IsNotEmpty()
        full_name: string; 
}
