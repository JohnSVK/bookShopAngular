import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];

  book: Book = {
    id: 1,
    name: 'Windstorm'
  };

  selectedBook: Book;
  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

}
