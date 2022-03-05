import { TestBed, inject } from '@angular/core/testing';

import { GestartServicesService } from './gestart-services.service';

describe('GestartServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestartServicesService]
    });
  });

  it('should be created', inject([GestartServicesService], (service: GestartServicesService) => {
    expect(service).toBeTruthy();
  }));
});
