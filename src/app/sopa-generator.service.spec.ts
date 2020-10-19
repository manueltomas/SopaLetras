import { TestBed } from '@angular/core/testing';

import { SopaGeneratorService } from './sopa-generator.service';

describe('SopaGeneratorService', () => {
  let service: SopaGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SopaGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
