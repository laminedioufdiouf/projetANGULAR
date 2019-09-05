import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { CompteComponent } from './compte/compte.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { AjoutUsersComponent } from './ajout-users/ajout-users.component';
import { DepotComponent } from './depot/depot.component';
import { DepotListComponent } from './depot-list/depot-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  
  {
    path: 'compte',
    
    component: CompteComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'depot',
    
    component: DepotComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'partenaire-list',
    
    component:PartenaireListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'depot-list',
    
    component:DepotListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ajoutUsers',
    component: AjoutUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
