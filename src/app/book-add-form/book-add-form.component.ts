import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent implements OnInit {

  bookForm = new FormGroup({
    bookName: new FormControl(''),
    bookCategory: new FormControl(''),
    bookType: new FormControl(''),
    bookDescription: new FormControl(''),
    authorName: new FormControl(''),
    authorSurname: new FormControl(''),
    authorCountry: new FormControl('')
  });

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.bookForm.value);

    this.bookService.saveBook(this.bookForm.value);
  }

}
