/* eslint-disable prettier/prettier */

import { IsDate, IsDecimal, IsNotEmpty, IsString } from "class-validator";
import { AType } from "../entities/aType.enum";

/* eslint-disable prettier/prettier */
export class CreateAccountDto {
        @IsString()
        @IsNotEmpty()
        account_name: string;
        @IsString()
        @IsNotEmpty()
        account_type: AType;
        @IsNotEmpty()
        @IsString()
        account_number: string;
        @IsDecimal()
        @IsNotEmpty()
        current_balance: number;
        @IsString()
        @IsNotEmpty()
        currency: string;
        @IsDate()
        created_at: Date;
        @IsDate()
        updated_at: Date;

}
