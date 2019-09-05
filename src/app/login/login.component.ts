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
        this._router.navigate(['/register'])
      },
      err => console.log(err)
    ) 
  }
 /* isAdmin(){
    return this._auth.isAdmin();
  }
  isUser(){
    return this._auth.isUser();
  }*/

}

