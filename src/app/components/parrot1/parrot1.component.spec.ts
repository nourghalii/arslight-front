import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parrot1Component } from './parrot1.component';

describe('Parrot1Component', () => {
  let component: Parrot1Component;
  let fixture: ComponentFixture<Parrot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Parrot1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Parrot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
