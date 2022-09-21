import Payment from "./Payment";
import purchasedBooks from "src/app/entity/PurchasedBooks"
import { BooksPurchasedComponent } from "../Components/books-purchased/books-purchased.component";
import PurchasedBooks from "src/app/entity/PurchasedBooks";

export default class ResponsePayload{
    statusCode:number=0;
    message:string="";
    data:Object|undefined;
    payment:PurchasedBooks|undefined;
}