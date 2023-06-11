import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Funcionario} from "./funcionario";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = 'http://localhost:8080/funcionario';
  /*
  * é necessário injetar o HttpClientModule no módulo ...
  * */
  constructor(private http: HttpClient) { }

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API+"/funcionarios");
  }

  buscar(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(this.API+"/funcionario/"+id);
  }

  criar(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.API+"/save", funcionario);
  }

  editar(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(this.API+"/editar", funcionario);
  }

  deletar(id: number): Observable<Funcionario>{
    return this.http.delete<Funcionario>(this.API+"/excluir/"+id);
  }
}
