import { TestBed } from '@angular/core/testing';

import { SpeechToTextArService } from './speech-to-text-ar.service';

describe('SpeechToTextArService', () => {
  let service: SpeechToTextArService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechToTextArService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
