import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private LoginServices:AuthServiceService) { }
  detailes:any
  UserDetailes:any
  firstname!:''
  loggedUser = this.LoginServices.savedUserId;
  
  savedUserId: any
  strWithOutQuotes!:string




  ngOnInit(): void {
    this.getDetailes();
    this.savedUserId = this.LoginServices.getUserId();
    this.strWithOutQuotes= this.savedUserId.replace(/"/g, '');
    console.log(this.loggedUser)
  }


  publicid = this.strWithOutQuotes
  getDetailes(){
    
    this.detailes  = this.LoginServices.getUserDetailes(`${this.strWithOutQuotes}`).subscribe((data) =>{
      // this.UserDetailes.firstName = 
      this.UserDetailes= data;
      console.log(data)
      
        
    });
  }
}
