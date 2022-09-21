import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/Book';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  book:Book=new Book();
  listBook:Book[]=[];

  search(){
    
    let obj = Object.fromEntries(Object.entries(this.book).filter(([_, key]) => key != ""));
    this.bookService.searchBook(obj).subscribe(
      resp=>{
        this.listBook=resp as Book[];
        if(this.listBook.length==0){
          alert("No data found");
        }
        console.log(this.listBook);
        
      },error=>{
        console.log(error);
        alert("Error fetching data")
      }
    )
  }
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
