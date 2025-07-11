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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budgetitem = void 0;
const budget_entity_1 = require("../../budgets/entities/budget.entity");
const typeorm_1 = require("typeorm");
let Budgetitem = class Budgetitem {
    budget_item_id;
    budget_item_name;
    allocated_amount;
    for_budget;
};
exports.Budgetitem = Budgetitem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Budgetitem.prototype, "budget_item_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Budgetitem.prototype, "budget_item_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal' }),
    __metadata("design:type", Number)
], Budgetitem.prototype, "allocated_amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.Budget, budget => budget.items),
    __metadata("design:type", budget_entity_1.Budget)
], Budgetitem.prototype, "for_budget", void 0);
exports.Budgetitem = Budgetitem = __decorate([
    (0, typeorm_1.Entity)()
], Budgetitem);
//# sourceMappingURL=budgetitem.entity.js.map