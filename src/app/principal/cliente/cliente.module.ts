import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ClienteComponent
  ],
  exports: [
    ClienteComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RouterLink
  ]
})
export class ClienteModule { }
