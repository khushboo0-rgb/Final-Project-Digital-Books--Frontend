import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BookCreateComponent } from './Components/create-books/create-books.component';
import { FormsModule } from '@angular/forms';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { LoginComponent } from './Components/login-page/login-page.component';

import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { UpdateBooksComponent } from './Components/update-books/update-books.component';
import { SignupComponent } from './Components/signup/signup.component';
import { DeleteBooksComponent } from './Components/delete-books/delete-books.component';
import { SearchBooksByAuthorComponent } from './Components/search-books-by-author/search-books-by-author.component';
import { AuthorComponent } from './Components/author/author.component';
import { ReaderComponent } from './Components/reader/reader.component';
import { StoreModule } from '@ngrx/store';
import { SearchBooksAllComponent } from './Components/search-books-all/search-books-all.component';
import { BooksPurchasedComponent } from './Components/books-purchased/books-purchased.component';
import { SearchBookByPaymentIdComponent } from './Components/search-book-by-payment-id/search-book-by-payment-id.component';


@NgModule({
  declarations: [
    AppComponent,
  
    BookCreateComponent,
    SearchBooksComponent,
    LoginComponent,

  
    AboutusComponent,
    UpdateBooksComponent,
    SignupComponent,
    DeleteBooksComponent,
    SearchBooksByAuthorComponent,
    AuthorComponent,
    ReaderComponent,
   
    
   
    SearchBooksAllComponent,
    BooksPurchasedComponent,
    SearchBookByPaymentIdComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
