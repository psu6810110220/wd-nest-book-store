import { BookCategoryService } from './book-category.service';
import { CreateBookCategoryDto } from './dto/create-book-category.dto';
import { UpdateBookCategoryDto } from './dto/update-book-category.dto';
export declare class BookCategoryController {
    private readonly bookCategoryService;
    constructor(bookCategoryService: BookCategoryService);
    create(createBookCategoryDto: CreateBookCategoryDto): Promise<import("./entities/book-category.entity").BookCategory>;
    findAll(): Promise<import("./entities/book-category.entity").BookCategory[]>;
    findOne(id: string): Promise<import("./entities/book-category.entity").BookCategory>;
    update(id: string, updateBookCategoryDto: UpdateBookCategoryDto): Promise<import("./entities/book-category.entity").BookCategory>;
    remove(id: string): Promise<void>;
}
