/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateCompanyDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    address: string
}
