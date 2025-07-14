/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/createCompany')
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.create(createCompanyDto);
  }

  @Get('/allCompanies')
  findAll() {
    return this.companyService.findAll();
  }

  @Get('oneCompany/:id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch('/updatingCompany/:id')
  update(@Param('id') id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete('/deletingCompany/:id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
