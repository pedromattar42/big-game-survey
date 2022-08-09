import { TestBed } from '@angular/core/testing';

import { RecordInterfaceService } from './record-interface.service';

describe('RecordInterfaceService', () => {
  let service: RecordInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
