import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  public searchTerm : string ='';

  
  constructor(private loginService:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.USERID = this.loginService.getUserId()!;
    // console.log("User----->"+this.user.userId);
  }
  
 
  logoutUser(){
    this.loginService.logout()
    
    this.router.navigate(['/']);
    location.reload()
    
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.loginService.search.next(this.searchTerm);
  }
  


}
