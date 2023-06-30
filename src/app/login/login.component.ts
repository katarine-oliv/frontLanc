import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Funcionario} from "../principal/funcionario/funcionario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  funcionario : Funcionario = new Funcionario(1, 'Admin', 'admin@gmail.com','123', 'Administrador');

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  logar(): void{
    this.service.login(this.funcionario).subscribe(f=>{
      console.log('token: '+f.token);
      console.log('emailLogin:'+f.email);
      this.service.setarUsuarioLogado(f);
      this.service.setCargo(f.cargo)
      this.router.navigate(['/principal'])
    })
  }
}
