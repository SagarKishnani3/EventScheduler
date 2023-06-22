import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/applicationConstant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  approvalpending():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/approvalpending`)
  }
  adminApprovslRejection(body:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/adminapprovalrejection`,body)
  }
}
