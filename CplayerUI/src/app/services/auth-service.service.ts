import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../authentication/login/login.component';



export const TOKEN_NAME:string = "jwt_token";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  baseUrl="http://localhost:8081/api/v1/userservice"

  
  constructor(private http:HttpClient) {}
  

    //login user // generate token
  dologin(user: any):Observable<any> {
    const url = "http://localhost:8081/api/v1/userservice/login";
    // `${this.baseUrl}/login`;
  
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



