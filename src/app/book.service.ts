import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from './entity/Book';
import Payment from './entity/Payment';
import PurchasedBooks from './entity/PurchasedBooks';
import ResponsePayload from './entity/ResponsePayLoad';


const BASE_URL_AUTHOR = "http://localhost:8085/";
const BASE_URL_READER = "http://localhost:9091/"

const aid= 1;
@Injectable({
  providedIn: 'root'
})
export class BookService {
  refundBook(book:PurchasedBooks,emailId:string){
    return this.http.get<ResponsePayload>(BASE_URL_READER+`payment/reader/${emailId}/purchasedbooks/${book.paymentId}`)
  }
  
  getBooks()
  {
    return this.http.get(BASE_URL_AUTHOR+"book/allbooks")
  }
  createBook(book: {title:string; authorEmail:string,readable:boolean; category:string; publisher:string; price:number; active:Boolean;image:string;content:string;releasedDate:Date;authorName:string}){
    return this.http.post(BASE_URL_AUTHOR+"book/saveauthor",book);
  }
  searchBook(book:any){
    return this.http.post<Book[]>(BASE_URL_READER+"reader/searchBook/book",book);
  }

  updateBook(bt, bid) {
    return this.http.put(BASE_URL_AUTHOR+"book/update/"+ bt.bookId, bt);
  }
  constructor(public http: HttpClient) { }
  deleteBooks(bookId) {
    return this.http.delete(BASE_URL_AUTHOR+"book/book/" + bookId );
  }
  searchBooksByAuthor(authorName) {
    return this.http.get(BASE_URL_AUTHOR+"book/getbookByAuthor/" + authorName);
  }
  getBookById(bookId:number){
    return this.http.get<Book>(BASE_URL_AUTHOR+"book/getBook/"+bookId)
  }

  createPayment(payment:any){
    // alert("HERE I am");
    return this.http.post<Payment>(BASE_URL_READER+"payment/books/payment/buy",payment);
  }
  showPurchasedBooks(emailId:string){
    return this.http.get<PurchasedBooks[]>(BASE_URL_READER+"payment/readers/"+emailId);
  }
  showPurchasedBooksByPaymentId(paymentId:number){
   
    console.log(paymentId);
    return this.http.get<PurchasedBooks[]>(BASE_URL_READER+"payment/readers/paymentId/"+paymentId);
  }


}
