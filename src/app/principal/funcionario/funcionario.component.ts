import { Component, OnInit } from '@angular/core';
import {Funcionario} from "./funcionario";
import {FuncionarioService} from "./funcionario.service";

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();

  funcionarios: Funcionario[] = [];

  opcao = 'cadastrar'

  cadastrado: boolean = false;

  constructor(private service: FuncionarioService) {

  }

  ngOnInit(): void {
    this.atualizar();
  }


  atualizar(): void {
    this.service.listar().subscribe((dados ) => {
      this.funcionarios = dados;
    });
  }

  cadastrar() {
    this.service.criar(this.funcionario)
      .subscribe(() => {
        this.funcionario = new Funcionario();
        this.atualizar();
      })
  }
  update(){
    this.service.editar(this.funcionario)
      .subscribe(()=>{
        this.funcionario = new Funcionario();
        this.atualizar();
        this.opcao = 'cadastrar'
      })
  }
  editar(id?: number){
    if(id != undefined)
      this.service.buscar(id).subscribe((dado: Funcionario)=>{
        this.funcionario = dado;
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
