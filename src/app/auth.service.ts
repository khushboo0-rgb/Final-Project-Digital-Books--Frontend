import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthResponse from './entity/authResponse';
import LogInRequest from './entity/loginRequest';
import SignupRequest from './entity/SignUpRequest';

const LOGIN_BASE_URL="http://localhost:8085/digitalbooks/author"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(auth:LogInRequest){
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"/login",auth);
  }

  checkduplicateUser(auth:SignupRequest){
    return this.http.post(LOGIN_BASE_URL+"/checkDuplicate",auth);
  }

  createUser(auth:SignupRequest){
    
    return this.http.post<AuthResponse>(LOGIN_BASE_URL+"/signup",auth);
  }

  constructor(private http:HttpClient) { }
}