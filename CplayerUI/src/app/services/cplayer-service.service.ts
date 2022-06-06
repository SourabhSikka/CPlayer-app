import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CricPlayer } from '../cric-player';
export const USER_NAME = "username";
@Injectable({
  providedIn: 'root'
})
export class CplayerServiceService {
 
  cplayerApi: String;
  apiKey: String;
  playerInfo:string;
  favouritEndPoint: string;
  username: string="";
  constructor(private http: HttpClient) {
    this.cplayerApi = 'https://api.cricapi.com/v1/players?';
    //this.apiKey = 'apikey=bb1861a3-6be3-4894-b8ac-b83b9183899c';
   this.apiKey = 'apikey=fb20bf3d-215a-4d5e-88e0-ddece631cea3';
  // this.apiKey = 'apikey=290b21e9-ab64-45cd-a7dd-a33e9dde791c';
    this.playerInfo='https://api.cricapi.com/v1/players_info?';
    this.favouritEndPoint= 'http://localhost:7072/api/v1/favoriteservice';
  }
  getAllPlayerList(pid:String): Observable<any> {
    
   this.apiKey = 'apikey=fb20bf3d-215a-4d5e-88e0-ddece631cea3&id='+pid;
   
    const url = `${this.playerInfo}${this.apiKey}`;
    return this.http.get(url);
  }

  getPlayerDetails(pid:String):Observable<any> 
  {
   
    this.apiKey = 'apikey=fb20bf3d-215a-4d5e-88e0-ddece631cea3&id='+pid;
    const url = `${this.playerInfo}${this.apiKey}`;
    return this.http.get(url);
  }
  addPlayerToFavoriteList(cPlayer:CricPlayer) 
  {
  
    this.username =  sessionStorage.getItem(USER_NAME) || '{}';
   const url = this.favouritEndPoint + "/user/" + this.username + "/player";
   console.log("sent.........")
   console.log(url);
  return this.http.post(url, cPlayer)
}


  

}
