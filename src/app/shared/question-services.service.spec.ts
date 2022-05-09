import { TestBed } from '@angular/core/testing';

import { QuestionServicesService } from './question-services.service';

describe('QuestionServicesService', () => {
  let service: QuestionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
