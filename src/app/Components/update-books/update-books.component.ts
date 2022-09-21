import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {
 books : Book[]=[];
  book: Book = new Book();
  bookId:number=0;
  

  updateBook(bt,j)
  {

       this.bookId=bt.bookId;
        console.log(bt.bookId);
        this.book.bookId=bt.bookId;
        this.book.title=bt.title;
        this.book.authorName=bt.authorName;
        this.book.category=bt.category;
        this.book.publisher=bt.publisher;
        this.book.image=bt.image;
        this.book.content=bt.content;
        this.book.active=bt.active;
        this.book.price=bt.price;
        this.book.releasedDate=bt.releasedDate;
      

        

          }

          update(book)
          {
            
             console.log(book); 
        const observable=this.bookService.updateBook(this.book,this.bookId);
        observable.subscribe(
          (response:any) => {
          console.log(response)
          alert("Book Updated");
          },
          function(error){
            console.log(error);
            alert("Something went wrong");        
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