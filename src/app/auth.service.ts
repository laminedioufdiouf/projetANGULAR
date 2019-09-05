import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8000/api/Entreprise";
  private _loginUrl = "http://localhost:8000/api/login_check";
  private _compteUrl = "http://localhost:8000/api/Compte";
  private _depotUrl = "http://localhost:8000/api/Depot";
  private _ajoutUsersUrl = "http://localhost:8000/api/User";
  private _partenairelistUrl = "http://localhost:8000/api/partenaire";
  private _depotlistUrl = "http://localhost:8000/api/depot";
  jwt:string;
  username:string;
  roles:Array<string>;

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
  return this.http.post<any>(this._registerUrl,formData, user)

  }
  ajoutUsersUser(user) {
    return this.http.post<any>(this._ajoutUsersUrl, user)
  }

  loginUser(data) {
    return this.http.post<any>(this._loginUrl, data,{observe:'response'})
  }
  
  compteUrl(user) {

    const formData= new FormData();
    formData.append("montant",user.montant)

    return this.http.post<any>(this._compteUrl, user)
    

  }
  depotUrl(user) {

    const formData= new FormData();

    formData.append("datedepot",user.datedepot)
    formData.append("solde",user.solde)

    return this.http.post<any>(this._depotUrl, user)
  }
  partenairelistUser(user) {
    return this.http.post<any>(this._partenairelistUrl, user)
  }
  depotlistUser(user) {
    return this.http.post<any>(this._depotlistUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

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
    /*let jwtHelper=new JwtHeService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;*/
  }

  /*isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('User')>=0;
  }*/

  isAuthed(){
    return this.roles;
  }

  
}
