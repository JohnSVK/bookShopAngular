import { Injectable } from '@angular/core';
import { Book, Author, BookCategory, BookType } from './model/book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookByIdUrl = 'http://localhost:8080/books/';

  private booksUrl = 'http://localhost:8080/books';
  private authorsUrl = 'http://localhost:8080/book/authors';
  private categoriesUrl = 'http://localhost:8080/book/categories';
  private typesUrl = 'http://localhost:8080/book/types';

  private saveBookUrl = 'http://localhost:8080/books/';

  getTypes(): Observable<BookType[]> {
    return this.http.get<BookType[]>(this.typesUrl);
  }

  getCategories(): Observable<BookCategory[]> {
    return this.http.get<BookCategory[]>(this.categoriesUrl);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookByIdUrl + id);
  }

  saveBook(book: Book): void {
    console.log('saveBook', book);
    const savedBook = this.http.post<Book>(this.saveBookUrl, book);
    savedBook.subscribe(newBook => console.log('saveBook SAVED', newBook));
  }

  constructor(
    private http: HttpClient
  ) { }
}
