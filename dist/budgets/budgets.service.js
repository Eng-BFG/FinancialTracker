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
exports.BudgetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./entities/budget.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const budgetitem_entity_1 = require("../budgetitems/entities/budgetitem.entity");
let BudgetsService = class BudgetsService {
    budgetRepository;
    userRepository;
    budgetitemRepository;
    constructor(budgetRepository, userRepository, budgetitemRepository) {
        this.budgetRepository = budgetRepository;
        this.userRepository = userRepository;
        this.budgetitemRepository = budgetitemRepository;
    }
    async create(id, createBudgetDto) {
        const budget = this.budgetRepository.create(createBudgetDto);
        const user = await this.userRepository.findOne({
            where: { user_id: id },
            relations: ['budgets']
        });
        if (!user) {
            throw new common_1.NotFoundException('User with ID ${id} does not exist');
        }
        budget.creator = user;
        return this.budgetRepository.save(budget);
    }
    findAll() {
        return this.budgetRepository.find();
    }
    findOne(id) {
        return this.budgetRepository.findOne({
            where: { budget_id: id },
            relations: ['budgets', 'for_budget']
        });
    }
    async update(id, updatebudgetDto) {
        const budget = await this.budgetRepository.findOne({
            where: { budget_id: id }
        });
        if (!budget) {
            throw new common_1.NotFoundException(`budget with ID ${id} not found`);
        }
        Object.assign(budget, updatebudgetDto);
        return this.budgetRepository.save(budget);
    }
    async remove(id) {
        const result = await this.budgetRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
    }
};
exports.BudgetsService = BudgetsService;
exports.BudgetsService = BudgetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(budgetitem_entity_1.Budgetitem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetsService);
//# sourceMappingURL=budgets.service.js.map