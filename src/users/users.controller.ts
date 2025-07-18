/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createUser/company/:id/role/:role_id')
  create(@Param('id', ParseIntPipe) id: number,
  @Param('role_id', ParseIntPipe) role_id: number,
  @Body() createUserDto: CreateUserDto) {
    return this.usersService.create(id, role_id, createUserDto);
  }

  @Get('/allUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/oneUser/:id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('updateUser/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

}
