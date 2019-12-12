import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:8080/books';
  private bookByIdUrl = 'http://localhost:8080/books/';
  private saveBookUrl = 'http://localhost:8080/books/';

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookByIdUrl + id);
  }

  saveBook(book: string): void {
    console.log('saveBook', book);
    const savedBook = this.http.post<Book>(this.saveBookUrl, book);
    savedBook.subscribe(newBook => console.log('saveBook SAVED', newBook));
  }

  constructor(
    private http: HttpClient
  ) { }
}
