import { TestBed } from '@angular/core/testing';

import { ControlEntidadService } from './control-entidad.service';

describe('ControlEntidadService', () => {
  let service: ControlEntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlEntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
