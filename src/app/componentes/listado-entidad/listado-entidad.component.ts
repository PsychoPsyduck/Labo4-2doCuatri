import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoEntidades = [];
  @Output() verDetalle: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  VerEntidad(entidad) {
    this.verDetalle.emit(entidad);
  }
}
