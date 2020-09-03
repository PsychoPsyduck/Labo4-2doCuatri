import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  
  constructor(private router: Router) {
    this.usuario = new Usuario;
   }

  ngOnInit(): void {
  }

  Ingresar() {
    if(!(this.usuario.nombre == "admin" && this.usuario.clave == "admin")) {
      this.router.navigate(['/error']);
    }
    else {
      this.router.navigate(['/bienvenido']);
    }
  }
}
