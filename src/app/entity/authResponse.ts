import LogIn from "./LogIn";

export default class AuthResponse{
    message:string="";
    role:string="";
    statusCode:number=0;
    user:LogIn=new LogIn();
}