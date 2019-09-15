import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public user =[];

  dataSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private _partService: UserService, private _router:Router) { }

  ngOnInit() {


    this._partService.getUser()

    .subscribe(

      res => { this.user = res,

        this.dataSource = new MatTableDataSource(this.user);
        this.dataSource.paginator = this.paginator;
      },
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
  displayedColumns: string[] = ['username', 'roles', 'nom', 'adresse', 'email'];
  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
