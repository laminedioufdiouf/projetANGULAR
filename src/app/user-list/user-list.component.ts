import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public user =[];
  constructor(private _partService: UserService, private _router:Router) { }

  ngOnInit() {


    this._partService.getUser()

    .subscribe(

      res => this.user = res,
      err => {
        console.log(this.user)
        if (err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
