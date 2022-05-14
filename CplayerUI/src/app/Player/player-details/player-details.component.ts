import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CplayerServiceService} from 'src/app/services/cplayer-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  playerId:string="";
  CPlayersDetails:any=[];
  constructor(private CPlayerListService: CplayerServiceService, private route:ActivatedRoute, 
    public dialogRef: MatDialogRef<PlayerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public id:any ) {
      this. playerId= this.id;
     }

  ngOnInit(): void {
  
  
    //let id=this.route.snapshot.paramMap.get('id')+"";
    //this.playerId=id;
    this.CPlayerListService. getEmployeeDetails(this.playerId).subscribe(data=>
      {
        console.log("-----------------------------------------");
       this.CPlayersDetails=data.data;
       console.log(this.CPlayersDetails);
      
      });
      
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
