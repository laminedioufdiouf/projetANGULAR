import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ajout-users',
  templateUrl: './ajout-users.component.html',
  styleUrls: ['./ajout-users.component.scss']
})
export class AjoutUsersComponent implements OnInit {

  ajoutUsersUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  ajoutUsersUser() {
    console.log(this.ajoutUsersUserData)
    this._auth.ajoutUsersUser(this.ajoutUsersUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }
}
