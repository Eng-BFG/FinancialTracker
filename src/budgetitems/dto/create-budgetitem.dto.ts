/* eslint-disable prettier/prettier */
import { IsDecimal, IsNotEmpty, IsString } from "class-validator";


/* eslint-disable prettier/prettier */
export class CreateBudgetitemDto {
    @IsString()
    @IsNotEmpty()
    budget_item_name: string;
    @IsDecimal()
    @IsNotEmpty()
    allocated_amount: number;
}
