import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwtDecode, * as jwt_decode from 'jwt-decode';
import { User } from './user';
// import jwt_decode from 'jwt-decode';


export const TOKEN_NAME:string = "jwt_token";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // authServiceEndpoint:string = "http://localhost:8081/api/v1/userservice";
  // token!:string;

  // constructor(private http:HttpClient) { }

  // loginUser(user: any):Observable<any> {
  //   const url = `${this.authServiceEndpoint}/login`;
  //   return this.http.post(url, user);
  // }

  // registerUser(newUser: any) {
  //   const url = `${this.authServiceEndpoint}/register`;
  //   return this.http.post(url, newUser, {responseType: 'text'});
  // }
  // abc:string="abc";


  // setToken(token:string) {
  //   return localStorage.setItem(TOKEN_NAME, token);
  // }

  // getToken() {
  //   return localStorage.getItem(TOKEN_NAME);
  // }

  // deleteToken() {
  //   return localStorage.removeItem(TOKEN_NAME);
  // }
  // getTokenExpirationDate(token: string) {
  //   const decoded = jwtDecode(token);
  //   if(decoded.exp === undefined) {
  //     return null;
  //   }
  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }

  // isTokenExpired(token?: string): boolean {
  //   if(!token) {
  //     token= this.getToken();
  //   }
  //   if(!token) {
  //     return true;
  //   }
  //   const date = this.getTokenExpirationDate(token);
  //   if(date === undefined || date === null) {
  //     return false;
  //   }
  //   return !(date.valueOf() > new Date().valueOf());
  // }

  baseUrl="http://localhost:8081/api/v1/userservice"

  constructor(private http:HttpClient) {}
  SaveUser: User = new User;

  //Calling the server to generate token

    // doLogin(user:any){
    //   //token generate
    //   return this.http.post(`${this.baseUrl}/login`,user)
    // }

    //login user // generate token
  dologin(user: any):Observable<any> {
    const url = "http://localhost:8081/api/v1/userservice/login";
    // `${this.baseUrl}/login`;
     this.SaveUser= user;
    localStorage.setItem("saveUser",user);
    return this.http.post(url, user);
  }
 

  //for login user
  loginUser(token:string){
    localStorage.setItem("token",token)
    return true;
  }


  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }


  //for logout the user
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");    
  }
  registerUser(newUser: any) {
    const url ="http://localhost:8081/api/v1/userservice/register";
    return this.http.post(url, newUser, {responseType: 'text'});
  }

}



