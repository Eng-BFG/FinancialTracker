"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBudgetitemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_budgetitem_dto_1 = require("./create-budgetitem.dto");
class UpdateBudgetitemDto extends (0, mapped_types_1.PartialType)(create_budgetitem_dto_1.CreateBudgetitemDto) {
}
exports.UpdateBudgetitemDto = UpdateBudgetitemDto;
//# sourceMappingURL=update-budgetitem.dto.js.map