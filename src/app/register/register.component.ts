import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { DepotService } from '../depot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private service: DepotService,
              private toastr : ToastrService) { }

  ngOnInit() {
  }
  registerUser() {
    //console.log(this.registerUserData)
    this._auth.registerUrl(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
       /* localStorage.setItem('token', res.token)*/
       this.toastr.success('ENREGISTRE avec succsé', 'EMP. Register')
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }


}