/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/createTransaction')
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get('/allTransactions')
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get('/oneTransaction/:id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

 
}
