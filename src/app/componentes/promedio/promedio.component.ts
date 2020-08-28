import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  edadUno = 0 ;
  edadDos = 0;
  promedio = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcularPromedio() {
    let promedio = this.edadUno + this.edadDos;

    this.promedio = promedio / 2;
  }

  Limpiar() {
    this.edadUno = 0
    this.edadDos = 0
    this.promedio = 0
  }
}
