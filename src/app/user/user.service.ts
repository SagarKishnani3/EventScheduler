import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/applicationConstant';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  //   getDetailById(id: number) {
  //   return this.myData.filter((value:any)=>value.eventid==id)[0];
  // }
  fetchEvents():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/pageListing`);
  }
  listShows(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addEvents`,body);
  }
  eventdetail(data:any):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/event-detail/${data}`);
  }
  
}
