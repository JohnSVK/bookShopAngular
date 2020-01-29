import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Book, Author, BookCategory, BookType } from '../model/book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent implements OnInit {

  book: Book;

  authors: Author[];
  categories: BookCategory[];
  types: BookType[];

  bookForm = new FormGroup({
    bookName: new FormControl(''),
    bookDescription: new FormControl(''),
    bookAuthor: new FormControl(''),
    bookCategory: new FormControl(''),
    bookType: new FormControl('')
  });

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getAuthors();
    this.getCategories();
    this.getTypes();
  }

  onSubmit() {
    console.warn(this.bookForm.value);

    this.book = {
        id: null, name: this.bookForm.value.bookName, description: this.bookForm.value.bookDescription,
        author: {
          id : this.bookForm.value.bookAuthor,
          name: null,
          surname: null,
          country: null
        },
        bookCategory: {
          id: this.bookForm.value.bookCategory,
          name: null,
          description: null
        },
        bookType: {
          id: this.bookForm.value.bookType,
          name: null,
          description: null
        }
    };

    this.bookService.saveBook(this.book);
  }

  getTypes(): void {
    this.bookService.getTypes().subscribe(types => {this.types = types; console.log('getTypes', types); });
  }

  getCategories(): void {
    this.bookService.getCategories().subscribe(categories => {this.categories = categories; console.log('getCategories', categories); });
  }

  getAuthors(): void {
    this.bookService.getAuthors().subscribe(authors => {this.authors = authors; console.log('getAuthors', authors); });
  }

}
