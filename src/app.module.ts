/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BudgetsModule } from './budgets/budgets.module';
import { CompanyModule } from './company/company.module';
import { Role } from './roles/entities/role.entity';
import { User } from './users/entities/user.entity';
import { Company } from './company/entities/company.entity';
import { Transaction } from './transactions/entities/transaction.entity';
import { Account } from './accounts/entities/account.entity';
import { Budget } from './budgets/entities/budget.entity';
import { Budgetitem } from './budgetitems/entities/budgetitem.entity';
import { BudgetitemsModule } from './budgetitems/budgetitems.module';

@Module({
  imports: [
    // Configure ConfigModule to load .env files
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
  TypeOrmModule.forRootAsync({ // Use forRootAsync for dynamic configuration
      imports: [ConfigModule], // Import ConfigModule here
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Role, User, Company, Transaction, Account, Budget, Budgetitem],
        synchronize: true, 
      }),
      inject: [ConfigService],
    }),
  UsersModule,
  RolesModule,
  AccountsModule,
  TransactionsModule,
  BudgetsModule,
  CompanyModule,
  BudgetitemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
