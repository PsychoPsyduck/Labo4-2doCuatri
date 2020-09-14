import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlEntidadService {

  private url = environment.urlControlEntidad;
  public usuario;

  constructor(private http: HttpClient) { }

  public obtenerEntidades() {
    return this.http.get(this.url);
  }
}
