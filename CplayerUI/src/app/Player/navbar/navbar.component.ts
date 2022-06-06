import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CplayerServiceService } from 'src/app/services/cplayer-service.service';
import { User } from 'src/app/services/user';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class NavbarComponent implements OnInit {

  user!: User;
  public loggedIn=false;
  USERID!:string;
  searchName!:string;
 

  
  constructor(private loginService:AuthServiceService, private router:Router, private searchCom:SearchComponent) { }

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
  searchOnClick(){
  // console.log(this.searchComp.searchResults());
  sessionStorage.setItem("searchname",this.searchName);
    // console.log("Name",this.searchName)
    console.log( sessionStorage.getItem('searchname'));
    this.searchCom.searchResults();
  }
  


}
