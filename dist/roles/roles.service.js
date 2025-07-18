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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./entities/role.entity");
const typeorm_2 = require("typeorm");
let RolesService = class RolesService {
    roleRepository;
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    create(createRoleDto) {
        return this.roleRepository.save(createRoleDto);
    }
    findAll() {
        return this.roleRepository.find();
    }
    findOne(id) {
        return this.roleRepository.findOne({
            where: { role_id: id }
        });
    }
    async update(id, updateroleDto) {
        const role = await this.roleRepository.findOne({
            where: { role_id: id }
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with ID ${id} not found`);
        }
        Object.assign(role, updateroleDto);
        return this.roleRepository.save(role);
    }
    async remove(id) {
        const result = await this.roleRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Company with ID ${id} not found`);
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map