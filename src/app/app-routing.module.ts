import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BookListComponent },
  { path: 'books/detail/:id', component: BookDetailComponent },
  { path: 'books/form', component: BookAddFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
