import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DepotService } from '../depot.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {


  depotUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private service: DepotService,
              private toastr : ToastrService) { }

    
  ngOnInit() {
  }

  depotUser() {
    //console.log(this.registerUserData)
    this._auth.depotUrl(this.depotUserData)
    .subscribe(
      res => {
        console.log(res)
       /* localStorage.setItem('token', res.token)*/
       this.toastr.success('depose avec succsé', 'EMP. Register')
        this._router.navigate(['/'])
      },
      err => console.log(err)
    ) 
    }
}
