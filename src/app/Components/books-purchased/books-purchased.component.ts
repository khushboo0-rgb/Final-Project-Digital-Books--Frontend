import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';
import PurchasedBooks from 'src/app/entity/PurchasedBooks';

@Component({
  selector: 'app-books-purchased',
  templateUrl: './books-purchased.component.html',
  styleUrls: ['./books-purchased.component.css']
})
export class BooksPurchasedComponent implements OnInit {

  listBook:PurchasedBooks[]=[];
  isRefundedSuccessfully:boolean=false;

  showListofPurchasedBook(){
    let userEmail=sessionStorage.getItem('email');
    console.log(userEmail)
    this.bookService.showPurchasedBooks(`${userEmail}`).subscribe(
      resp=>{
        this.listBook=resp;
        console.log(this.listBook);
      },err=>{
       
        alert("Error")
      }
    )
  }
  refund(book:PurchasedBooks){
    let userEmail=sessionStorage.getItem('email');
    this.bookService.refundBook(book,`${userEmail}`).subscribe(
      resp=>{
        if(resp.statusCode==202){
          alert(resp.message);
          this.isRefundedSuccessfully=true;
        }
        if(resp.statusCode==409){
          this.isRefundedSuccessfully=true;
        }
        else{
          alert(resp.message);
        }
      },err=>{
        alert(err.message);
      }
    );
    window.location.reload()
  }

  

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.showListofPurchasedBook();
  }

}