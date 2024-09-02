import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestApiInterface} from "../../_interface/request-api.interface";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  getUploadToken(url:string,headers:{ headers: HttpHeaders}):Observable<RequestApiInterface>{
    return this.http.get<RequestApiInterface>(url, headers);
  }


}
