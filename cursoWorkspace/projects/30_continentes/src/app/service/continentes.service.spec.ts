import { TestBed } from '@angular/core/testing';

import { ContinentesService } from './continentes.service';

describe('ContinentesService', () => {
  let service: ContinentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
