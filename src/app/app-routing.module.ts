import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PrincipalComponent} from "./principal/principal.component";
import {ClienteComponent} from "./principal/cliente/cliente.component";
import {AuthGuards} from "./security/auth.guards";
import { ProdutoComponent } from './principal/produto/produto.component';
import { PedidoComponent } from './principal/pedido/pedido.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuards]},

  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuards],

    children: [
    ]
  },
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuards]},
  {path: 'produto', component: ProdutoComponent, canActivate: [AuthGuards]},
  {path: 'pedido', component: PedidoComponent, canActivate: [AuthGuards]},
  {path: "**", component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
