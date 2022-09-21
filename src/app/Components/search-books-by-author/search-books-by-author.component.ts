import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-search-books-by-author',
  templateUrl: './search-books-by-author.component.html',
  styleUrls: ['./search-books-by-author.component.css']
})
export class SearchBooksByAuthorComponent implements OnInit {

  books: Book[] = [];
  book: Book = new Book();

  authorName: string = "";


  searchBooksByAuthor(authorName) {

    console.log(authorName);


    this.bookService.searchBooksByAuthor(authorName).

      subscribe((response) => {
        console.log(response);
        this.books = response as Book[];

      });
  }


  constructor(private bookService: BookService) { }

  ngOnInit(): void {



  }

}