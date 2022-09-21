import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from 'src/app/Components/create-books/create-books.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { LoginComponent } from './Components/login-page/login-page.component';

import { AboutusComponent } from './Components/aboutus/aboutus.component';

import { UpdateBooksComponent } from './Components/update-books/update-books.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DeleteBooksComponent } from './Components/delete-books/delete-books.component';
import { SearchBooksByAuthorComponent } from './Components/search-books-by-author/search-books-by-author.component';
import { AuthorComponent } from './Components/author/author.component';
import { ReaderComponent } from './Components/reader/reader.component';

import { SearchBooksAllComponent } from './Components/search-books-all/search-books-all.component';
import { BooksPurchasedComponent } from './Components/books-purchased/books-purchased.component';
import { SearchBookByPaymentIdComponent } from './Components/search-book-by-payment-id/search-book-by-payment-id.component';
const routes: Routes = [
  {path:'createBooks', component:BookCreateComponent},
   {path: 'searchBooks' , component:SearchBooksComponent},
   {path:"", redirectTo:"login", pathMatch:"full"},
{path:"login", component:LoginComponent},
 {path:"signUp",component:SignupComponent},
 {path:"aboutus", component: AboutusComponent},
{path:"searchBooksByPaymentId", component:SearchBookByPaymentIdComponent},
{path:"booksPurchased",component:BooksPurchasedComponent},
{path:"searchBookAll", component:SearchBooksAllComponent},
{path:"author", component:AuthorComponent},
{path:"reader",component:ReaderComponent},
{path:"searchByAuthor",component:SearchBooksByAuthorComponent},
{path:"deleteBooks", component:DeleteBooksComponent} ,
{path:"updatebooks",component : UpdateBooksComponent}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
