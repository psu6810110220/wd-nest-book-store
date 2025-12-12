import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookCategory } from '../book-category/entities/book-category.entity';
import { Book } from '../book/entities/book.entity';
import { UserService } from '../user/user.service';
export declare class FixturesService implements OnModuleInit {
    private bookCategoryRepository;
    private bookRepository;
    private userService;
    private readonly logger;
    constructor(bookCategoryRepository: Repository<BookCategory>, bookRepository: Repository<Book>, userService: UserService);
    onModuleInit(): Promise<void>;
    loadFixtures(): Promise<void>;
    private createTestUser;
    private createCategories;
    private createBooks;
}
