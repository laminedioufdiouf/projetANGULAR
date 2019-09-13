import { TestBed } from '@angular/core/testing';

import { ComptService } from './compt.service';

describe('ComptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComptService = TestBed.get(ComptService);
    expect(service).toBeTruthy();
  });
});
