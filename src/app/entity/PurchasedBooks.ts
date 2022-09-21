export default class PurchasedBooks{
    image:string="";
    title:string="";
    price:number=0;
    active:boolean|undefined;
    payment_date:Date|undefined;
    totalAmount:number=0;
    totalNumber:number=1;
    paymentId:number=0;
    refunded:boolean|undefined;
}