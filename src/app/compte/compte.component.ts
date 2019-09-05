import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {


  compteUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }


  ngOnInit() {
  }

  compteUser() {
    //console.log(this.registerUserData)
    this._auth.compteUrl(this.compteUserData)
    .subscribe(
      res => {
        console.log(res)
       /* localStorage.setItem('token', res.token)*/
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }


}
