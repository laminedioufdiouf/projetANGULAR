import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DepotService } from '../depot.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {


  compteUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private service: DepotService,
              private toastr : ToastrService) { }


  ngOnInit() {
  }

  compteUser() {
    //console.log(this.registerUserData)
    this._auth.compteUrl(this.compteUserData)
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
