import { Component, OnInit } from '@angular/core';
import {Cliente} from "./cliente";
import {ClienteService} from "./cliente.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {catchError} from "rxjs";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  clientes: Cliente[] = [];

  opcao = 'cadastrar'

  cadastrado: boolean = false;

  constructor(private service: ClienteService) {
  }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar(): void {
    this.service.listar().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  cadastrar() {
    this.service.criar(this.cliente)
      .subscribe(() => {
        this.cliente = new Cliente();
      this.atualizar();
    })
  }
  update(){
    this.service.editar(this.cliente)
    .subscribe(()=>{
      this.cliente = new Cliente();
      this.atualizar();
      this.opcao = 'cadastrar'
    })
  }
  editar(id?: number){
    if(id != undefined)
    this.service.buscar(id).subscribe((dado: Cliente)=>{
      this.cliente = dado;
      this.opcao = 'editar'
    })
  }
  deletar(id?: number){
    if(id != undefined)
    this.service.deletar(id).subscribe(()=>{
      this.atualizar();
    })
  }
}
