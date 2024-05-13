import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyslexiaTestComponent } from './dyslexia-test.component';

describe('DyslexiaTestComponent', () => {
  let component: DyslexiaTestComponent;
  let fixture: ComponentFixture<DyslexiaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DyslexiaTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DyslexiaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
