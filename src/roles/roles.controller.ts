/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('/createRole')
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get('/allRoles')
  findAll() {
    return this.rolesService.findAll();
  }

  @Get('/getOneRole/:id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(+id);
  }

  @Patch('/updateRole/:id')
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete('/deleteRole/:id')
  remove(@Param('id') id: number) {
    return this.rolesService.remove(+id);
  }
}
