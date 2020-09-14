import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEliminadoEntidadComponent } from './listado-eliminado-entidad.component';

describe('ListadoEliminadoEntidadComponent', () => {
  let component: ListadoEliminadoEntidadComponent;
  let fixture: ComponentFixture<ListadoEliminadoEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEliminadoEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEliminadoEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
