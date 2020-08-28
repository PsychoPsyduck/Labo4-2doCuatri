import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  edadUno : number;
  edadDos : number;
  promedio : number;

  constructor() { }

  ngOnInit(): void {
  }

  calcularPromedio() {
    let promedio = this.edadUno + this.edadDos;

    this.promedio = promedio / 2;
  }

}
