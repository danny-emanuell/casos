import { TestBed, inject } from '@angular/core/testing';

import { DatacasesService } from './datacases.service';

describe('DatacasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacasesService]
    });
  });

  it('should ...', inject([DatacasesService], (service: DatacasesService) => {
    expect(service).toBeTruthy();
  }));
});
