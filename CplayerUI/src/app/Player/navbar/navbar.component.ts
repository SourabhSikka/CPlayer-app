import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/services/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: User;
  public loggedIn=false;
  USERID!:string;
 

  
  constructor(private loginService:AuthServiceService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.USERID = this.loginService.getUserId()!;
    // console.log("User----->"+this.user.userId);
  }
  
 
  logoutUser(){
    this.loginService.logout()
    location.reload()
  }
  


}
