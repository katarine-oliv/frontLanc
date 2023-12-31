import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ProdutoComponent
  ],
  exports:[
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink
  ]
})
export class ProdutoModule { }
