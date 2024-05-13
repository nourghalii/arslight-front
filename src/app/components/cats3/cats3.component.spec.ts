import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cats3Component } from './cats3.component';

describe('Cats3Component', () => {
  let component: Cats3Component;
  let fixture: ComponentFixture<Cats3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cats3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cats3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
