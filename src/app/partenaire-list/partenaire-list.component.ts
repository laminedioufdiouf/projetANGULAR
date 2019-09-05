import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.scss']
})
export class PartenaireListComponent implements OnInit {

  public partenaire =[];

  constructor(private _partService: PartenaireService, private _router:Router) {}

  ngOnInit() {

    this._partService.getPartenaire()

    .subscribe(

      res => this.partenaire = res,
      err => {
        console.log(this.partenaire)
        if (err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
