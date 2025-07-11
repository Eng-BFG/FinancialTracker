import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetitemDto } from './create-budgetitem.dto';

export class UpdateBudgetitemDto extends PartialType(CreateBudgetitemDto) {}
