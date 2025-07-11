/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('/createAccount/user/:user_id/transaction/:transaction_id')
  create(@Param('user_id', ParseIntPipe) user_id: number,
  @Param('transaction_id', ParseIntPipe) transaction_id: number,
  @Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(user_id, transaction_id, createAccountDto);
  }

  @Get('/allAccounts')
  findAll() {
    return this.accountsService.findAll();
  }

  @Get('/account/:id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  
  }

