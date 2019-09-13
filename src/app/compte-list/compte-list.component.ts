import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComptService } from '../compt.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.scss']
})
export class CompteListComponent implements OnInit {

  public compte=[];
  constructor(private _compService: ComptService, private _router:Router) { }

  ngOnInit() {

    this._compService.getCompte()

    .subscribe(

      res => this.compte= res,
      err => {
        console.log(this.compte)
        if (err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
