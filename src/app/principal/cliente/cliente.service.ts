import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Cliente} from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API = 'http://localhost:8080/cliente';
/*
* é necessário injetar o HttpClientModule no módulo ...
* */
  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API+"/clientes");
  }

  buscar(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.API+"/cliente/"+id);
  }

  criar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.API+"/save", cliente);
  }

  editar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.API+"/editar", cliente)
  }

  deletar(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.API+"/excluir/"+id);
  }
}
