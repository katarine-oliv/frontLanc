import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {FuncionarioComponent} from "./funcionario.component";



@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  exports: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink
  ]
})
export class FuncionarioModule { }
