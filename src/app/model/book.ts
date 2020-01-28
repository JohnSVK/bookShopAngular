export class Book {
    id: number;
    name: string;
    description: string;

    author: Author;
    bookCategory: BookCategory;
    bookType: BookType;
}

export class BookCategory {
    id: number;
    name: string;
    description: string;
}

export class BookType {
    id: number;
    name: string;
    description: string;
}

export class Author {
    id: number;
    name: string;
    surname: string;
    country: string;
}
