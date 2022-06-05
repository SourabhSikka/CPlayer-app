import { Component, OnInit } from '@angular/core';
import { CplayerServiceService } from 'src/app/services/cplayer-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  service: any;
  players: any;


  constructor(private playerService:CplayerServiceService, private navcomp:NavbarComponent) { }

  ngOnInit(): void {
  }
  onEnter(searchKey: any) {
    console.log(searchKey);
    this.playerService.searchPlayer(searchKey).subscribe((date)=>{
     console.log()
    })
  }
}


