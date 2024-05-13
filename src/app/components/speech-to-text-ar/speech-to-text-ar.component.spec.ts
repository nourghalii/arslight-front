import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechToTextArComponent } from './speech-to-text-ar.component';

describe('SpeechToTextArComponent', () => {
  let component: SpeechToTextArComponent;
  let fixture: ComponentFixture<SpeechToTextArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeechToTextArComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeechToTextArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
