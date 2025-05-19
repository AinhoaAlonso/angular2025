import { TestBed } from '@angular/core/testing';

import { BuscadorCategoriaService } from './buscador-categoria.service';

describe('BuscadorCategoriaService', () => {
  let service: BuscadorCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
