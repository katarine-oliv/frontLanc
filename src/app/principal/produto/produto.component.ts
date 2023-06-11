import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  constructor(private service: ProdutoService) { }

  produto: Produto = new Produto();
  produtos: Produto[] = [];
  opcao = 'cadastrar'

  ngOnInit(): void {
    this.atualizar();
  }
  atualizar(): void {
    this.service.listar().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  cadastrar() {
    this.service.criar(this.produto)
      .subscribe(() => {
        this.produto = new Produto();
      this.atualizar();
    })
  }
  update(){
    this.service.editar(this.produto)
    .subscribe(()=>{
      this.produto = new Produto();
      this.atualizar();
      this.opcao = 'cadastrar'
    })
  }
  editar(id?: number){
    if(id != undefined)
    this.service.buscar(id).subscribe((dado: Produto)=>{
      this.produto = dado;
      this.opcao = 'editar'
    })
  }
  deletar(id?: number){
    if(id != undefined)
    this.service.deletar(id).subscribe(()=>{
      this.atualizar();
    })
  }

  protected readonly Produto = Produto;
}
