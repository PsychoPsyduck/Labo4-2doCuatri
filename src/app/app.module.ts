import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { PromedioComponent } from './componentes/promedio/promedio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    PromedioComponent,
    ErrorComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
