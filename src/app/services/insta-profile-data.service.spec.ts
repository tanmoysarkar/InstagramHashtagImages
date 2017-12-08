import { TestBed, inject } from '@angular/core/testing';

import { InstaProfileDataService } from './insta-profile-data.service';

describe('InstaProfileDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstaProfileDataService]
    });
  });

  it('should be created', inject([InstaProfileDataService], (service: InstaProfileDataService) => {
    expect(service).toBeTruthy();
  }));
});
