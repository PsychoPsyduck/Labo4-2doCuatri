import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { PromedioComponent } from './componentes/promedio/promedio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NewBienvenidoComponent } from './componentes/new-bienvenido/new-bienvenido.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';


const routes: Routes = [
  {path: '', component: NewBienvenidoComponent},
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'promedio', component: PromedioComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'paises/listado', component: ControlEntidadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
