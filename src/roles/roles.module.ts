/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, User])
  ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
