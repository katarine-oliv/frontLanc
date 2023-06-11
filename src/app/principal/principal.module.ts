import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import {ClienteModule} from "./cliente/cliente.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import {FuncionarioModule} from "./funcionario/funcionario.module";



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ClienteModule,
    ProdutoModule,
    PedidoModule,
    FuncionarioModule,
    RouterOutlet,
    RouterModule
  ]
})
export class PrincipalModule { }
