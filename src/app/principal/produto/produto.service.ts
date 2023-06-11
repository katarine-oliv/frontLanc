import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "./produto";

@Injectable({
    providedIn: 'root'
  })
  export class ProdutoService {
  
    private readonly API = 'http://localhost:8080/produto';
  /*
  * é necessário injetar o HttpClientModule no módulo ...
  * */
    constructor(private http: HttpClient) { }
  
    listar(): Observable<Produto[]>{
      return this.http.get<Produto[]>(this.API+"/produtos");
    }
  
    buscar(id: number): Observable<Produto>{
      return this.http.get<Produto>(this.API+"/produto/"+id);
    }
  
    criar(produto: Produto): Observable<Produto>{
      return this.http.post<Produto>(this.API+"/save", produto);
    }
  
    editar(produto: Produto): Observable<Produto>{
      return this.http.put<Produto>(this.API+"/editar", produto)
    }
  
    deletar(id: number): Observable<Produto>{
      return this.http.delete<Produto>(this.API+"/excluir/"+id);
    }
  }