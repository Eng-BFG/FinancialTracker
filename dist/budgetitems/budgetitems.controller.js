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
exports.BudgetitemsController = void 0;
const common_1 = require("@nestjs/common");
const budgetitems_service_1 = require("./budgetitems.service");
const create_budgetitem_dto_1 = require("./dto/create-budgetitem.dto");
const update_budgetitem_dto_1 = require("./dto/update-budgetitem.dto");
let BudgetitemsController = class BudgetitemsController {
    budgetitemsService;
    constructor(budgetitemsService) {
        this.budgetitemsService = budgetitemsService;
    }
    create(id, createBudgetitemDto) {
        return this.budgetitemsService.create(id, createBudgetitemDto);
    }
    findAll() {
        return this.budgetitemsService.findAll();
    }
    findOne(id) {
        return this.budgetitemsService.findOne(+id);
    }
    update(id, updateBudgetitemDto) {
        return this.budgetitemsService.update(+id, updateBudgetitemDto);
    }
    remove(id) {
        return this.budgetitemsService.remove(+id);
    }
};
exports.BudgetitemsController = BudgetitemsController;
__decorate([
    (0, common_1.Post)('/createItem/budgetitem/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_budgetitem_dto_1.CreateBudgetitemDto]),
    __metadata("design:returntype", void 0)
], BudgetitemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/allItems'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BudgetitemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/oneItem/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetitemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/updateItem/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_budgetitem_dto_1.UpdateBudgetitemDto]),
    __metadata("design:returntype", void 0)
], BudgetitemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deleteItem/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetitemsController.prototype, "remove", null);
exports.BudgetitemsController = BudgetitemsController = __decorate([
    (0, common_1.Controller)('budgetitems'),
    __metadata("design:paramtypes", [budgetitems_service_1.BudgetitemsService])
], BudgetitemsController);
//# sourceMappingURL=budgetitems.controller.js.map