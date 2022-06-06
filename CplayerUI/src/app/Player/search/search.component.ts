
import { Component, Injectable, OnInit } from '@angular/core';

import { CplayerServiceService } from 'src/app/services/cplayer-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SearchComponent implements OnInit {
  searchKey:any;
  PlayersDetails:any=[];
  Detailes:any=[];

  constructor(private PlayerService:CplayerServiceService) {
    
   }

  ngOnInit(): void {
   
  
  }


  searchResults(){
  }
  }






