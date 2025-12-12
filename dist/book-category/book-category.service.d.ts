import { Repository } from 'typeorm';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';
import { BookCategory } from './entities/book-category.entity';
export declare class BookCategoryService {
    private bookCategoryRepository;
    constructor(bookCategoryRepository: Repository<BookCategory>);
    create(createBookCategoryDto: CreateBookCategoryDto): Promise<BookCategory>;
    findAll(): Promise<BookCategory[]>;
    findOne(id: number): Promise<BookCategory>;
    update(id: number, updateBookCategoryDto: UpdateBookCategoryDto): Promise<BookCategory>;
    remove(id: number): Promise<void>;
}
