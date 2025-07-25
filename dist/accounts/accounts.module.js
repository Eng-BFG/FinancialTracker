"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const accounts_service_1 = require("./accounts.service");
const accounts_controller_1 = require("./accounts.controller");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("./entities/account.entity");
const user_entity_1 = require("../users/entities/user.entity");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
let AccountsModule = class AccountsModule {
};
exports.AccountsModule = AccountsModule;
exports.AccountsModule = AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([account_entity_1.Account, user_entity_1.User, transaction_entity_1.Transaction])
        ],
        controllers: [accounts_controller_1.AccountsController],
        providers: [accounts_service_1.AccountsService],
    })
], AccountsModule);
//# sourceMappingURL=accounts.module.js.map