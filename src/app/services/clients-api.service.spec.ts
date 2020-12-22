import { TestBed } from '@angular/core/testing';

import { ClientsApiService } from './clients-api.service';

describe('MtgApiService', () => {
  let service: ClientsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
