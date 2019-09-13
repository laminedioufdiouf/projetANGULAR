import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        
        let jwt=res.body['token']
        /*localStorage.setItem('token', jwt)*/
        this._auth.saveToken(jwt);
        this._router.navigate(['/'])
      },
      err => console.log(err)
    ) 
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
  /* isCaissier(){
    return this._auth.isCaissier();
  }
  isAdminSimple(){
    return this._auth.isAdminSimple();
  } */

}

