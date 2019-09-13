import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public ListeuserUrl = "http://localhost:8000/api/user";
  constructor(private http: HttpClient, private authService: AuthService) { }


  getUser() :Observable<any> {

    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.ListeuserUrl, {headers:headers})
  }
}
