import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConstants } from '../shared/constants/applicationConstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  validateLogin(body:any){
    return this.httpClient.post(`${ApplicationConstants.APIURL}/validateLogin`,body)
  }
  addUser(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/register`,body)
  }
  validateUser(user:any):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/validateUser/${user}`)
  }
  validamin(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/validateadmin`,body)
  }
}
