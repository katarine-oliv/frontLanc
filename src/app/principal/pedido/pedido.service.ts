import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "./pedido";

@Injectable({
    providedIn: 'root'
  })
  export class PedidoService {
  
    private readonly API = 'http://localhost:8080/pedido';
  /*
  * é necessário injetar o HttpClientModule no módulo ...
  * */
    constructor(private http: HttpClient) { }
  
    listar(): Observable<Pedido[]>{
      return this.http.get<Pedido[]>(this.API+"/pedidos");
    }
  
    buscar(id: number): Observable<Pedido>{
      return this.http.get<Pedido>(this.API+"/pedido/"+id);
    }
  
    criar(pedido: Pedido): Observable<Pedido>{
      return this.http.post<Pedido>(this.API+"/save", pedido);
    }
  
    editar(pedido: Pedido): Observable<Pedido>{
      return this.http.put<Pedido>(this.API+"/editar", pedido)
    }
  
    deletar(id: number): Observable<Pedido>{
      return this.http.delete<Pedido>(this.API+"/excluir/"+id);
    }
  }