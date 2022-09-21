import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {

  books : Book[]=[];
  book: Book = new Book();

 
  delete(j)
  {

        const observable=this.bookService.
        deleteBooks(j);
        observable.subscribe((response:any)=>{
          console.log(response);
          this.books.splice(j,1);
          alert("book deleted successfully");
        });

        window.location.reload()

  }
  

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    

    

    const promise = this.bookService.getBooks();
    promise.subscribe((response)=>{
      console.log(response);
      this.books=response as Book[];
      
    })
  
  }

}

