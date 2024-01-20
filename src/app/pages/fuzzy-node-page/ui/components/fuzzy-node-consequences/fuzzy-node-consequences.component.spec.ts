import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeConsequencesComponent } from './fuzzy-node-consequences.component';

describe('FuzzyNodeConsequencesComponent', () => {
  let component: FuzzyNodeConsequencesComponent;
  let fixture: ComponentFixture<FuzzyNodeConsequencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeConsequencesComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeConsequencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
