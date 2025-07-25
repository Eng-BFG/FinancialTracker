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
exports.BudgetitemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const budgetitem_entity_1 = require("./entities/budgetitem.entity");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("../budgets/entities/budget.entity");
let BudgetitemsService = class BudgetitemsService {
    budgetitemRepository;
    budgetRepository;
    constructor(budgetitemRepository, budgetRepository) {
        this.budgetitemRepository = budgetitemRepository;
        this.budgetRepository = budgetRepository;
    }
    async create(id, createBudgetitemDto) {
        const item = this.budgetitemRepository.create(createBudgetitemDto);
        const budget = await this.budgetRepository.findOne({
            where: { budget_id: id },
            relations: ['items']
        });
        if (!budget) {
            throw new common_1.NotFoundException('Budget with id' + { id } + 'Not found');
        }
        item.for_budget = budget;
        return this.budgetitemRepository.save(item);
    }
    findAll() {
        return this.budgetitemRepository.find();
    }
    findOne(id) {
        return this.budgetitemRepository.findOne({
            where: { budget_item_id: id },
            relations: ['items']
        });
    }
    async update(id, updatebudgetitemDto) {
        const item = await this.budgetitemRepository.findOne({
            where: { budget_item_id: id }
        });
        if (!item) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        Object.assign(item, updatebudgetitemDto);
        return this.budgetitemRepository.save(item);
    }
    async remove(id) {
        const result = await this.budgetitemRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
    }
};
exports.BudgetitemsService = BudgetitemsService;
exports.BudgetitemsService = BudgetitemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budgetitem_entity_1.Budgetitem)),
    __param(1, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BudgetitemsService);
//# sourceMappingURL=budgetitems.service.js.map