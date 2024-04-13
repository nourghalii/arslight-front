import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEnseignantComponent } from './auth-enseignant.component';

describe('AuthEnseignantComponent', () => {
  let component: AuthEnseignantComponent;
  let fixture: ComponentFixture<AuthEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthEnseignantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
