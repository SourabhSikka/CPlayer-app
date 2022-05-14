import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CplayerServiceService {

  cplayerApi: String;
  apiKey: String;
  playerInfo:string;
  constructor(private http: HttpClient) {
    this.cplayerApi = 'https://api.cricapi.com/v1/players?';
    this.apiKey = 'apikey=bb1861a3-6be3-4894-b8ac-b83b9183899c';
    this.playerInfo='https://api.cricapi.com/v1/players_info?';
  }
  getAllPlayerList(): Observable<any> {
    
    
    const url = `${this.cplayerApi}${this.apiKey}`;

    return this.http.get(url);
  }

  getEmployeeDetails(pid:String):Observable<any> 
  {
   
    this.apiKey = 'apikey=bb1861a3-6be3-4894-b8ac-b83b9183899c&id='+pid;
    const url = `${this.playerInfo}${this.apiKey}`;
    return this.http.get(url);
  }

}
