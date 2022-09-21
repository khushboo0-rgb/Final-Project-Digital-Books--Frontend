import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import Book from '../../entity/Book';
import { Router } from '@angular/router';
import Payment from '../../entity/Payment';
import PurchasedBooks from '../../entity/PurchasedBooks';

@Component({
  selector: 'app-search-books-all',
  templateUrl: './search-books-all.component.html',
  styleUrls: ['./search-books-all.component.css']
})
export class SearchBooksAllComponent implements OnInit {

 
  book:Book=new Book();
  listBook:Book[]=[];
  isBuy:Boolean=false;
  numberOfBook:number=1;
  total:number=0;
  readable:Boolean=false;
  

  read(book:Book){
    this.readable=true;
    this.bookService.getBookById(book.bookId).subscribe(
      resp=>{
        this.book=resp;
      },err=>{
        alert("Something went wrong");
      }
    )
  }

  search(){
    this.isBuy=false;
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

  buy(book:Book){
    this.isBuy=true;
    this.bookService.getBookById(book.bookId).subscribe(
      resp=>{
        this.book=resp;
      },err=>{
        alert("Something went wrong");
      }
    )
  }

  backPage(){
    this.isBuy=false;
    this.readable=false;
    this.book=new Book();
    this.router.navigate(['searchBook']);
  }

  totalAmount(book:Book){
    console.log(this.numberOfBook);
   
    this.bookService.getBookById(book.bookId).subscribe(
      resp=>{
        this.book=resp;
        alert(this.numberOfBook)
        this.total=this.numberOfBook * this.book.price;
      },err=>{
        alert("Something went wrong");
      }
    )
  }


  payment(book:Book){
   
    if(this.numberOfBook = 1)
    {
      this.total=this.numberOfBook * this.book.price;
    }
    let userEmail=sessionStorage.getItem("email");
    let x={authorEmail:userEmail,bookId:book.bookId,totalAmount:this.total,totalNumber:this.numberOfBook};
    this.bookService.createPayment(x).subscribe(
      
      resp=>{
     
        if(resp.statusCode==202){
          book.readable = true;
          alert("Book Purchased Successfully");
        }else{
         
          alert(resp.message)
         
        }
      },
      err=>{
        console.log(this.bookService.createPayment(x));
        alert("Error23")
        
      }
    
    )
    
    
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.readable=false;
  }

}