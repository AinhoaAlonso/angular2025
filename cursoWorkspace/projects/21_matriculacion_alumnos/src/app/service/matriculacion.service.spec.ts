import { TestBed } from '@angular/core/testing';

import { MatriculacionService } from './matriculacion.service';

describe('MatriculacionService', () => {
  let service: MatriculacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
