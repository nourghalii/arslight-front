import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnfantComponent } from './home-enfant.component';

describe('HomeEnfantComponent', () => {
  let component: HomeEnfantComponent;
  let fixture: ComponentFixture<HomeEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEnfantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
