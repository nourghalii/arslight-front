import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOrthophonisteComponent } from './auth-orthophoniste.component';

describe('AuthOrthophonisteComponent', () => {
  let component: AuthOrthophonisteComponent;
  let fixture: ComponentFixture<AuthOrthophonisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthOrthophonisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthOrthophonisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
