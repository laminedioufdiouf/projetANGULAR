import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

 
  title = 'ngApp';

constructor(private _auth:AuthService){}

/*isAdmin(){
    return this._auth.isAdmin();
  }
  isUser(){
    return this._auth.isUser();
  }*/

  isAuthed(){
    return this._auth.isAuthed();
  }
}

