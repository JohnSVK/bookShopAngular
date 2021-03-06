import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  getBooks(): void {
    this.bookService.getBooks().subscribe(books => {this.books = books; console.log('getBooks', this.books); });
  }

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

}
