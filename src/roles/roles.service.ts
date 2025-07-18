/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>
  ){}
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOne({
      where: {role_id: id}
    });
  }

  async update(id: number, updateroleDto: UpdateRoleDto): Promise<Role> {
      const role = await this.roleRepository.findOne({
        where: {role_id: id}
      });
      if (!role) {
        throw new NotFoundException(`Role with ID ${id} not found`);
      }
      Object.assign(role, updateroleDto);
      return this.roleRepository.save(role);
      }
    
      async remove(id: number) {
      const result = await this.roleRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Company with ID ${id} not found`);
      }
    }
}
