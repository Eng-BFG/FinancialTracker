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
exports.CreateBudgetDto = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class CreateBudgetDto {
    budget_amount;
    start_date;
    end_date;
    created_at;
    updated_date;
}
exports.CreateBudgetDto = CreateBudgetDto;
__decorate([
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeorm_1.Decimal128)
], CreateBudgetDto.prototype, "budget_amount", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBudgetDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBudgetDto.prototype, "end_date", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBudgetDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateBudgetDto.prototype, "updated_date", void 0);
//# sourceMappingURL=create-budget.dto.js.map