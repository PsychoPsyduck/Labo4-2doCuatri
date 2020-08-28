import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  contrasena: string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Ingresar() {
    if(!(this.usuario == "admin" && this.contrasena == "admin")) {
      this.router.navigate(['/error']);
    }
    else {
      this.router.navigate(['/bienvenido']);
    }
  }
}
