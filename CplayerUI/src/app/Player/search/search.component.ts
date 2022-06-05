import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CplayerServiceService } from 'src/app/services/cplayer-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  service: any;
  players: any;
  public playerList: any;
  public data:any;  
  searchKey:string ="";


  constructor(private playerService:CplayerServiceService, private loginService:AuthServiceService) { }

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((res) => {
      this.playerList = res;
      this.data=this.playerList.data;

    });

    this.loginService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
  
}


