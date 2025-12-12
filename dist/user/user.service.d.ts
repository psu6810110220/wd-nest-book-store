import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByUsername(username: string): Promise<User | null>;
    validateUser(username: string, password: string): Promise<User | null>;
    createUser(username: string, password: string, email?: string): Promise<User>;
}
