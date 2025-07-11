import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<CreateRoleDto & import("./entities/role.entity").Role>;
    findAll(): Promise<import("./entities/role.entity").Role[]>;
    findOne(id: number): Promise<import("./entities/role.entity").Role | null>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
