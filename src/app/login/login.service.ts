import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Funcionario} from "../principal/funcionario/funcionario";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080';
  private readonly USUARIO_LOGADO = 'usuario-Logado';

  constructor(private http: HttpClient, private router: Router) { }

  login(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.API_URL+'login', funcionario);
  }

  setarUsuarioLogado(funcionario: Funcionario): void{
    sessionStorage.setItem(this.USUARIO_LOGADO, JSON.stringify(funcionario));
  }

  logout(): void{
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/login']);
  }

  usuario_logado(): Funcionario{
    return JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }

  private cargo!: string | undefined | any;

  setCargo(cargo: any){
    this.cargo = cargo;
    console.log("cargo: "+cargo)
  }

  getCargo(){
    return this.cargo;
  }

}
