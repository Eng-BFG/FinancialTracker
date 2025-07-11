"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetitemsModule = void 0;
const common_1 = require("@nestjs/common");
const budgetitems_service_1 = require("./budgetitems.service");
const budgetitems_controller_1 = require("./budgetitems.controller");
const typeorm_1 = require("@nestjs/typeorm");
const budgetitem_entity_1 = require("./entities/budgetitem.entity");
const budget_entity_1 = require("../budgets/entities/budget.entity");
let BudgetitemsModule = class BudgetitemsModule {
};
exports.BudgetitemsModule = BudgetitemsModule;
exports.BudgetitemsModule = BudgetitemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([budgetitem_entity_1.Budgetitem, budget_entity_1.Budget])
        ],
        controllers: [budgetitems_controller_1.BudgetitemsController],
        providers: [budgetitems_service_1.BudgetitemsService],
    })
], BudgetitemsModule);
//# sourceMappingURL=budgetitems.module.js.map