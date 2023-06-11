import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HttpClientModule
  ]
})
export class PedidoModule { }
