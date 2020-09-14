import { Component, Input, OnInit } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';

@Component({
  selector: 'app-listado-eliminado-entidad',
  templateUrl: './listado-eliminado-entidad.component.html',
  styleUrls: ['./listado-eliminado-entidad.component.css']
})
export class ListadoEliminadoEntidadComponent implements OnInit {

  listadoEliminadoEntidades = [];
  @Input() entidad: Entidad = new Entidad()

  constructor() { }

  ngOnInit(): void {
  }

  
}
