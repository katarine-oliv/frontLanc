import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "./usuario";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario = new Usuario();

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
  }

  logar(): void{
    this.service.login(this.usuario).subscribe(u=>{
      console.log('token: '+u.token);
      if(u.token)
        sessionStorage.setItem("token", u.token)
      this.router.navigate(['/principal'])
    })
  }
}
