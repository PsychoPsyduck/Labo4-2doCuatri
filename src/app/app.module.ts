import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PromedioComponent } from './componentes/promedio/promedio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { NewBienvenidoComponent } from './componentes/new-bienvenido/new-bienvenido.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';
import { ListadoEliminadoEntidadComponent } from './componentes/listado-eliminado-entidad/listado-eliminado-entidad.component';
import { BotonEntidadComponent } from './componentes/boton-entidad/boton-entidad.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    PromedioComponent,
    ErrorComponent,
    BienvenidoComponent,
    NewBienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent,
    ListadoEliminadoEntidadComponent,
    BotonEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
