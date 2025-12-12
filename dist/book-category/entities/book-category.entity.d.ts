import { Book } from '../../book/entities/book.entity';
export declare class BookCategory {
    id: number;
    name: string;
    description: string;
    books: Book[];
    createdAt: Date;
    updatedAt: Date;
}
