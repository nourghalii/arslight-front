import { TestBed } from '@angular/core/testing';

import { SpeechToTextService } from './speech-to-text.service';

describe('SpeechToTextService', () => {
  let service: SpeechToTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechToTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
