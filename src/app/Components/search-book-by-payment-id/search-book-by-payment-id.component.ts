import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/Book';
import PurchasedBooks from 'src/app/entity/PurchasedBooks';
@Component({
  selector: 'app-search-book-by-payment-id',
  templateUrl: './search-book-by-payment-id.component.html',
  styleUrls: ['./search-book-by-payment-id.component.css']
})
export class SearchBookByPaymentIdComponent implements OnInit {

  listBook:PurchasedBooks[]=[];
 
  paymentId:number=0;

  showListofPurchasedBookByPaymentId( paymentId){
    // let userEmail=sessionStorage.getItem('email');
    // console.log(userEmail)
    console.log(paymentId);
    this.bookService.showPurchasedBooksByPaymentId(paymentId).subscribe(
      resp=>{
        this.listBook=resp;
        console.log("wapis");
      },err=>{
       
        alert("Error")
      }
    )
  }
 

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}