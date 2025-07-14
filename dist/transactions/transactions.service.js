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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./entities/transaction.entity");
const typeorm_2 = require("typeorm");
let TransactionsService = class TransactionsService {
    transactionRepository;
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    create(createTransactionDto) {
        const newTransaction = this.transactionRepository.create(createTransactionDto);
        return this.transactionRepository.save(newTransaction);
    }
    findAll() {
        return this.transactionRepository.find();
    }
    findOne(id) {
        return this.transactionRepository.findOne({
            where: { transaction_id: id },
            relations: ['account']
        });
    }
    async getTotalTransactionsSummary() {
        const result = await this.transactionRepository
            .createQueryBuilder('transaction')
            .select('COUNT(transaction.transaction_id)', 'count')
            .addSelect('SUM(transaction.amount)', 'totalAmount')
            .getRawOne();
        return {
            count: parseInt(result.count) || 0,
            totalAmount: parseFloat(result.totalAmount) || 0,
        };
    }
    async getCurrentMonthTransactionsSummary() {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        startOfMonth.setHours(0, 0, 0, 0);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999);
        const result = await this.transactionRepository
            .createQueryBuilder('transaction')
            .select('COUNT(transaction.transaction_id)', 'count')
            .addSelect('SUM(transaction.amount)', 'totalAmount')
            .where('transaction.transaction_date BETWEEN :startOfMonth AND :endOfMonth', {
            startOfMonth: startOfMonth,
            endOfMonth: endOfMonth,
        })
            .getRawOne();
        return {
            count: parseInt(result.count) || 0,
            totalAmount: parseFloat(result.totalAmount) || 0,
        };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map