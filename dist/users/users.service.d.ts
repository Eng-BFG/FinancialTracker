import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Company } from 'src/company/entities/company.entity';
import { Role } from 'src/roles/entities/role.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly companyRepository;
    private readonly roleRepository;
    constructor(userRepository: Repository<User>, companyRepository: Repository<Company>, roleRepository: Repository<Role>);
    create(id: number, role_id: number, createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
