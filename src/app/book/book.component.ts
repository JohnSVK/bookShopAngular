import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = BOOKS;

  book: Book = {
    id: 1,
    name: 'Windstorm'
  };

  selectedBook: Book;
  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit() {
  }

}
