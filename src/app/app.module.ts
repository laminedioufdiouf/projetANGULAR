import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { CompteComponent } from './compte/compte.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { PartenaireService } from './partenaire.service';
import { AjoutUsersComponent } from './ajout-users/ajout-users.component';
import { UserListComponent } from './user-list/user-list.component';
import { DepotComponent } from './depot/depot.component';
import { DepotListComponent } from './depot-list/depot-list.component';
import { DepotService } from './depot.service';
import { CompteListComponent } from './compte-list/compte-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CompteComponent,
    PartenaireComponent,
    PartenaireListComponent,
    AjoutUsersComponent,
    UserListComponent,
    DepotComponent,
    DepotListComponent,
    CompteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [ AuthService, AuthGuard,PartenaireService,DepotService],
  bootstrap: [AppComponent]
})
export class AppModule { }