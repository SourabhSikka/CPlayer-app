import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';
import {CplayerServiceService} from 'src/app/services/cplayer-service.service';
import {Router} from '@angular/router';
import { PlayerDetailsComponent } from 'src/app/Player/player-details/player-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
 
  columnsToDisplay:string[] = ['name','country','actions'];
  
  public CPlayersList:any=[]
  public cplayer:any;
  message:string="hellolo"
  dataSource:any;
   showSpinner:boolean=true;
   public check: String='1';
   public id:any;
  
   @ViewChild(MatPaginator) paginator: MatPaginator |undefined;
   @ViewChild(MatSort) sort: MatSort |undefined;
   constructor(private CPlayerListService: CplayerServiceService,private router:Router,public dialog: MatDialog) { }
 
   ngOnInit(): void {
     this.CPlayerListService. getAllPlayerList().subscribe(data=>
       {
       this.CPlayersList=data.data;
    this.showSpinner=false;
    this.check='0';
       console.log(data);
       this.dataSource=new MatTableDataSource<any>(this.CPlayersList);
       this.dataSource.paginator=this.paginator;
       this.dataSource.sort=this.sort;
   });
  
  }
 
 
 getDetails(index:String)
 {
   
   console.log("index is "+index);
   this.id=index;
  
   const dialogRef = this.dialog.open(PlayerDetailsComponent, {
    height: '75vh',
    width: '60vw',
     disableClose:true,
    data:this.id
   })
  }
  addToFavorite(cplayer: any)
   {
  this.cplayer=cplayer;
  // this.CPlayerListService. addPlayerToFavoriteList(this.cplayer);
  
   
  }
   }