import { Component, OnInit,ViewChild } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.scss']
})
export class PartenaireListComponent implements OnInit {

  public partenaire =[];
  dataSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _partService: PartenaireService, private _router:Router) {}

  ngOnInit() {

    this._partService.getPartenaire()

    .subscribe(

      res => {this.partenaire = res

        this.dataSource = new MatTableDataSource(this.partenaire);
      this.dataSource.paginator = this.paginator;
      },
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
  displayedColumns: string[] = ['id', 'ninea', 'raisonsociale', 'adress','statut'];
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
