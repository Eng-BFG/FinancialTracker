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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("../company/entities/company.entity");
const role_entity_1 = require("../roles/entities/role.entity");
let UsersService = class UsersService {
    userRepository;
    companyRepository;
    roleRepository;
    constructor(userRepository, companyRepository, roleRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.roleRepository = roleRepository;
    }
    async create(id, role_id, createUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        const company = await this.companyRepository.findOne({
            where: { id: id },
            relations: ['worker']
        });
        const role = await this.roleRepository.findOne({
            where: { role_id: role_id },
            relations: ['user']
        });
        if (!company) {
            throw new common_1.NotFoundException('Company is invalid');
        }
        if (!role) {
            throw new common_1.NotFoundException('Role of id' + { role_id } + 'not found');
        }
        newUser.company = company;
        newUser.role = role;
        return this.userRepository.save(newUser);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOne({
            where: { user_id: id }
        });
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({
            where: { user_id: id }
        });
        if (!user) {
            throw new common_1.NotFoundException(`user with ID ${id} not found`);
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __param(2, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map