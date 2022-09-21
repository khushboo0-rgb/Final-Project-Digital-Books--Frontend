import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/Book';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})

export class BookCreateComponent implements OnInit {
  
 
  book: Book= new Book();
  books: Book[] = [];
  
  save()
  {
    
    const observable = this.bookService.createBook(this.book);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      }


    )
  }
  constructor( public bookService: BookService) { }

  ngOnInit(): void {
    const promise = this.bookService.getBooks();
    promise.subscribe((response) => 
    {
      console.log(response);
      this.books = response as Book[];}
  )

}

}
