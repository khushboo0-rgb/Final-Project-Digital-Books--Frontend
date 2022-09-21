import { disableDebugTools } from "@angular/platform-browser";

export default class Book {
    bookId: number = 0;
    title: string = "";
    category: string = "";
    image: string = "";
    price: number = 0;
    publisher: string = "";
    active: boolean = true
    content: string = "";
    authorName: string = "";
    releasedDate = new Date();
    readable:boolean = false;
    authorEmail:string="";
    

}