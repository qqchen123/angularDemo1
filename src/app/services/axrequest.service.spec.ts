import { TestBed } from '@angular/core/testing';

import { AxrequestService } from './axrequest.service';

describe('AxrequestService', () => {
  let service: AxrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
