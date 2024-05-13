import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cats1Component } from './cats1.component';

describe('Cats1Component', () => {
  let component: Cats1Component;
  let fixture: ComponentFixture<Cats1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cats1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cats1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
