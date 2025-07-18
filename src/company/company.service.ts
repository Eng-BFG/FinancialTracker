/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private readonly companyRepository: Repository<Company>,
    ){}
  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = this.companyRepository.create(createCompanyDto)
    return this.companyRepository.save(newCompany)
  }

  findAll() {
    return this.companyRepository.find();
  }

  findOne(id: number) {
    return this.companyRepository.findOne({
      where: {id: id}
    });
  }

  async update(id: number, updatecompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: {id: id}
    });
    if (!company) {
      throw new NotFoundException(`company with ID ${id} not found`);
    }
    Object.assign(company, updatecompanyDto);
    return this.companyRepository.save(company);
    }
  
    async remove(id: number) {
    const result = await this.companyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
  }
  /*update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.companyRepository.update(id, updateCompanyDto);
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }*/
}
