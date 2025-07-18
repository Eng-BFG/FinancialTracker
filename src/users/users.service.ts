/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Company) private readonly companyRepository: Repository<Company>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>
  ){}
  async create(id: number, role_id: number, createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto)
    const company = await this.companyRepository.findOne({
      where: {id: id},
      relations: ['worker']
    })
    const role = await this.roleRepository.findOne({
      where: {role_id: role_id},
      relations: ['user']
    })
    if(!company) {
      throw new NotFoundException('Company is invalid')
    }
    if(!role) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      throw new NotFoundException('Role of id' + {role_id} + 'not found')
    }
    newUser.company = company
    newUser.role = role
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {user_id: id}
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  const user = await this.userRepository.findOne({
    where: {user_id: id}
  });
  if (!user) {
    throw new NotFoundException(`user with ID ${id} not found`);
  }
  Object.assign(user, updateUserDto);
  return this.userRepository.save(user);
  }
}

/*  remove(id: number) {
    return this.userRepository.delete(id);
  }*/

