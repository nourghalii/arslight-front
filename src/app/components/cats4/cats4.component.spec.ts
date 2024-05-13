import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cats4Component } from './cats4.component';

describe('Cats4Component', () => {
  let component: Cats4Component;
  let fixture: ComponentFixture<Cats4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cats4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cats4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
