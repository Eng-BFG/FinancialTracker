/* eslint-disable prettier/prettier */
import { IsDate, IsDecimal, IsNotEmpty } from "class-validator";import { Decimal128,  } from "typeorm";


/* eslint-disable prettier/prettier */
export class CreateBudgetDto {
    @IsDecimal()
    @IsNotEmpty()
    budget_amount: Decimal128;
    @IsDate()
    start_date: Date;
    @IsDate()
    end_date: Date;
   }
