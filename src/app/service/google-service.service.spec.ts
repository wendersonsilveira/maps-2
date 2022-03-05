import { TestBed, inject } from '@angular/core/testing';

import { GoogleServiceService } from './google-service.service';

describe('GoogleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleServiceService]
    });
  });

  it('should be created', inject([GoogleServiceService], (service: GoogleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
