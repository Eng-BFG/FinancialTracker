/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Ttype } from "../entities/ttype.enum";

/* eslint-disable prettier/prettier */
export class CreateTransactionDto {
    @IsEnum(Ttype)
    transaction_type: Ttype;
    @IsNumber()
    @IsNotEmpty()
    amount: number;
    @IsString()
    description: string;
    @IsString()
    @IsNotEmpty()
    category: string
}
