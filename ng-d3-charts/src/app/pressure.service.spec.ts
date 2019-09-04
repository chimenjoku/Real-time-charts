import { TestBed } from '@angular/core/testing';

import { PressureService } from './pressure.service';

describe('PressureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PressureService = TestBed.get(PressureService);
    expect(service).toBeTruthy();
  });
});
