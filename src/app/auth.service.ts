import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8000/api/Entreprise";
  private _loginUrl = "http://localhost:8000/api/login_check";
  private _compteUrl = "http://localhost:8000/api/Compte";
  private _depotUrl = "http://localhost:8000/api/Depot";
  private _ajoutUsersUrl = "http://localhost:8000/api/User";
  private _partenairelistUrl = "http://localhost:8000/api/partenaire";
  private _userlistUrl = "http://localhost:8000/api/user";
  private _depotlistUrl = "http://localhost:8000/api/depot";
  private _comptelistUrl = "http://localhost:8000/api/compte";
  private headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  jwt:string;
  username:string;
  roles:any;

  constructor(private http: HttpClient,
              private _router: Router) {localStorage.getItem("Token"); }

  registerUrl(user) {
  
    const formData= new FormData();
    formData.append("ninea",user.ninea)
    formData.append("raisonsociale",user.raisonsociale)
    formData.append("adress",user.adress)
    formData.append("statut",user.statut)
    formData.append("montant",user.montant)
    formData.append("datedepot",user.datedepot)
    formData.append("solde",user.solde)
    formData.append("username",user.username)
    formData.append("password",user.password)
    formData.append("profil",user.profil)
    formData.append("nom",user.nom)
    formData.append("adresse",user.adresse)
    formData.append("email",user.email)
    formData.append("telephone",user.telephone)
  return this.http.post<any>(this._registerUrl,formData,{headers:this.headers,observe:'response'})

  }
  ajoutUsersUser(user) {
    return this.http.post<any>(this._ajoutUsersUrl,user, {headers:this.headers,observe:'response'})
    
  }

  loginUser(data) {
    return this.http.post<any>(this._loginUrl, data,{observe:'response'})
  }
  
  compteUrl(user) {

    const formData= new FormData();
    formData.append("montant",user.montant)

    return this.http.post<any>(this._compteUrl, user,{headers:this.headers,observe:'response'})
    

  }
  depotUrl(user) {
 
    const formData= new FormData();

    formData.append("datedepot",user.datedepot)
    formData.append("solde",user.solde)

    return this.http.post<any>(this._depotUrl, user ,{headers:this.headers,observe:'response'})
  }
  partenairelistUser(user) {
    return this.http.post<any>(this._partenairelistUrl, user,{headers:this.headers,observe:'response'})
  }
  userlistUser(user) {
    return this.http.post<any>(this._userlistUrl, user ,{headers:this.headers,observe:'response'})
  }
  depotlistUser(user) {
    return this.http.post<any>(this._depotlistUrl, user ,{headers:this.headers,observe:'response'})
  }
  comptelistUser(user) {
    return this.http.post<any>(this._comptelistUrl, user ,{headers:this.headers,observe:'response'})
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  
/* LogOut() {
    localStorage.removeItem('token');
      this.initParam();
  } */

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }


  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();

  }

 parseJWT(){
    let jwtHelper=new JwtHelperService(this.jwt);
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.username;
    localStorage.setItem('username',this.username)
    this.roles=objJWT.roles;
    localStorage.setItem('roles',this.roles)
  }

  isSuperAdmin(){
    return this.roles.indexOf('ROLE_SUPER_ADMIN')>=0;
  }
  isAdminPartenaire(){
    return this.roles.indexOf('ROLE_ADMIN_PARTENAIRE')>=0;
  }
  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }
  /* isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
  }
  isAdminSimple(){
    return this.roles.indexOf('ROLE_ADMIN_SIMPLE')>=0;
  }
 */
  isAuthed(){
    return this.roles && (this.isSuperAdmin() || this.isAdminPartenaire() || this.isUser());
  }
}
