import { Component, Input, OnInit } from '@angular/core';
import { Entidad } from 'src/app/clases/entidad';
import { ControlEntidadService } from '../../servicios/control-entidad.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listadoEntidades = [];
  entidad: Entidad;

  constructor(private miservicio: ControlEntidadService) { }

  ngOnInit() {
    this.miservicio.obtenerEntidades().subscribe((entidad: any) => {
      console.log(entidad);
      console.log('console log dentro del observable');
      this.listadoEntidades = entidad;
    }, error => {
      console.log('Error');
    });
    console.log('console log despues del observable');
  }

  entidadSeleccionada(entidad) {
    console.log(entidad);
    this.entidad = entidad;
  }

}
