import { Component, OnInit, ViewChild } from '@angular/core';
import { DepotService } from '../depot.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-depot-list',
  templateUrl: './depot-list.component.html',
  styleUrls: ['./depot-list.component.scss']
})
export class DepotListComponent implements OnInit {

  public depot=[];

  dataSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _depService: DepotService, private _router:Router) { }

  ngOnInit() {

    this._depService.getDepot()

    .subscribe(

      res =>{ this.depot= res,
      this.dataSource = new MatTableDataSource(this.depot);
      this.dataSource.paginator = this.paginator;
    },
      err => {
        console.log(this.depot)
        if (err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }
  displayedColumns: string[] = ['id', 'datedepot', 'solde', 'compte'];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
