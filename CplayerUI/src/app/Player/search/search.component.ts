import { Component, Injectable, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CplayerServiceService } from 'src/app/services/cplayer-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SearchComponent implements OnInit {
  searchKey:any=[];
  PlayersDetails:any=[];
  Detailes:any=[];
  DetailsData:any=[];
  constructor(private PlayerService:CplayerServiceService,private router:Router,private  NavbarComponent: NavbarComponent) {
    
   }

  ngOnInit(): void {
    console.log("redirected")
    this.searchKey = sessionStorage.getItem('searchname');
    this.PlayerService.getSearchPlayer(this.searchKey).subscribe((data:any)=>{
      this.Detailes=data;
      this.DetailsData=data.data;
       console.log(this.Detailes);
       console.log(this.DetailsData)
       for(let i=0;i<this.DetailsData.length;i++)
       {
         console.log(this.DetailsData[i].name)
       }
     
       
     })
 
 
  }


 





}