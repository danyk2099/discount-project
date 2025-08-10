import { TestBed } from '@angular/core/testing';

import { TestResultsService } from './test-results';

describe('TestResults', () => {
  let service: TestResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
