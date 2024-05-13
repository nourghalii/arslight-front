import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cats2Component } from './cats2.component';

describe('Cats2Component', () => {
  let component: Cats2Component;
  let fixture: ComponentFixture<Cats2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cats2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cats2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
