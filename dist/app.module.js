"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const accounts_module_1 = require("./accounts/accounts.module");
const transactions_module_1 = require("./transactions/transactions.module");
const budgets_module_1 = require("./budgets/budgets.module");
const company_module_1 = require("./company/company.module");
const role_entity_1 = require("./roles/entities/role.entity");
const user_entity_1 = require("./users/entities/user.entity");
const company_entity_1 = require("./company/entities/company.entity");
const transaction_entity_1 = require("./transactions/entities/transaction.entity");
const account_entity_1 = require("./accounts/entities/account.entity");
const budget_entity_1 = require("./budgets/entities/budget.entity");
const budgetitem_entity_1 = require("./budgetitems/entities/budgetitem.entity");
const budgetitems_module_1 = require("./budgetitems/budgetitems.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USERNAME'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    entities: [role_entity_1.Role, user_entity_1.User, company_entity_1.Company, transaction_entity_1.Transaction, account_entity_1.Account, budget_entity_1.Budget, budgetitem_entity_1.Budgetitem],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            accounts_module_1.AccountsModule,
            transactions_module_1.TransactionsModule,
            budgets_module_1.BudgetsModule,
            company_module_1.CompanyModule,
            budgetitems_module_1.BudgetitemsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map