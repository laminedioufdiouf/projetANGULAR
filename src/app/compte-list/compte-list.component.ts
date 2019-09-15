import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComptService } from '../compt.service';
import { HttpErrorResponse } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.scss']
})
export class CompteListComponent implements OnInit {

  public compte=[];
  dataSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _compService: ComptService, private _router:Router) { }

  ngOnInit() {

    this._compService.getCompte()

    .subscribe(

      res => {this.compte= res,

        this.dataSource = new MatTableDataSource(this.compte);
      this.dataSource.paginator = this.paginator;
      },
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
  displayedColumns: string[] = ['id', 'numerocompte', 'montant', 'partenaire'];
  
  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
