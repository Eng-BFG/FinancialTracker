"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const account_entity_1 = require("./entities/account.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
let AccountsService = class AccountsService {
    accountRepository;
    userRepository;
    transactionRepository;
    constructor(accountRepository, userRepository, transactionRepository) {
        this.accountRepository = accountRepository;
        this.userRepository = userRepository;
        this.transactionRepository = transactionRepository;
    }
    async create(user_id, transaction_id, createAccountDto) {
        const usedAccount = this.accountRepository.create(createAccountDto);
        const user = await this.userRepository.findOne({
            where: { user_id: user_id },
            relations: ['accounts']
        });
        const transactions = await this.transactionRepository.findOne({
            where: { transaction_id: transaction_id },
            relations: ['account']
        });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        if (!transactions) {
            throw new common_1.NotFoundException('transaction not found');
        }
        if (!usedAccount.transactions) {
            usedAccount.transactions = [];
        }
        usedAccount.transactions.push(transactions);
        return this.accountRepository.save(usedAccount);
    }
    findAll() {
        return this.accountRepository.find();
    }
    findOne(id) {
        return this.accountRepository.findOne({
            where: { account_id: id },
            relations: ['transactions']
        });
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map