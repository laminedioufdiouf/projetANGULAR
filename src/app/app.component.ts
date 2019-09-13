import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'ngApp';
  
  

constructor(private _auth:AuthService){}

ngOnInit() {
}

isSuperAdmin(){
    return this._auth.isSuperAdmin();
  }
  isAdminPartenaire(){
    return this._auth.isAdminPartenaire();
  }
  isUser(){
    return this._auth.isUser();
  }
 /*  isCaissier(){
    return this._auth.isCaissier();
  }
  isAdminSimple(){
    return this._auth.isAdminSimple();
  } */

  isAuthed(){
    return this._auth.isAuthed();
  }
}

