import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthParentComponent } from './auth-parent.component';

describe('AuthParentComponent', () => {
  let component: AuthParentComponent;
  let fixture: ComponentFixture<AuthParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
