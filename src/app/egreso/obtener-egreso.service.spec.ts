import { TestBed } from '@angular/core/testing';

import { ObtenerEgresoService } from './obtener-egreso.service';

describe('ObtenerEgresoService', () => {
  let service: ObtenerEgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerEgresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
