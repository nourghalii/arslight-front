import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceCharacterComponent } from './exercice-character.component';

describe('ExerciceCharacterComponent', () => {
  let component: ExerciceCharacterComponent;
  let fixture: ComponentFixture<ExerciceCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciceCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciceCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
