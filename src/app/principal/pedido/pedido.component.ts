import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private service: PedidoService, private proService: ProdutoService, private cliService: ClienteService) { }

  pedido: Pedido = new Pedido();
  pedidos: Pedido[] = [];
  produtos: Produto[] = [];
  clientes: Cliente[] = [];
  opcao = 'cadastrar'

  ngOnInit(): void {
    this.atualizar()
  }
  atualizar(): void {
    this.service.listar().subscribe((dados) => {
      this.pedidos = dados;
    });
    this.cliService.listar().subscribe((dados)=>{
      this.clientes = dados;
    });
    this.proService.listar().subscribe((dados)=>{
      this.produtos = dados;
    })
  }

  cadastrar() {
    this.service.criar(this.pedido)
      .subscribe(() => {
        this.pedido = new Pedido();
      this.atualizar();
    })
  }
  update(){
    this.service.editar(this.pedido)
    .subscribe(()=>{
      this.pedido = new Pedido();
      this.atualizar();
      this.opcao = 'cadastrar'
    })
  }
  editar(id?: number){
    if(id != undefined)
    this.service.buscar(id).subscribe((dado: Pedido)=>{
      this.pedido = dado;
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
