import { Component, Injectable, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
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
  searchName!:string
  constructor(private PlayerService:CplayerServiceService,private router:Router,private route: ActivatedRoute,private navbarComponent:NavbarComponent) {
    
   }

  ngOnInit(): void {
    
  //      this.router.navigate(['search'])
  // .then(() => {
  //   window.location.reload();
  // });
  console.log("called")
   this.Detailes=this.navbarComponent.DetailsData;
     console.log(this.Detailes)
 
  }




  onSearching(){
    this.PlayerService.getSearchPlayer(this.searchName).subscribe((data:any)=>{
      console.log(data)
      this.Detailes = data.data;
    })
  }

}