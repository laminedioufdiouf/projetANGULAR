import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService} from './auth.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DepotService {
  public ListedepUrl = "http://localhost:8000/api/depot";
  constructor(private http: HttpClient, private authService: AuthService) { }

  getDepot() :Observable<any> {

    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.ListedepUrl, {headers:headers})
  }
}
