import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeAntecedentsComponent } from './fuzzy-node-antecedents.component';

describe('FuzzyNodeAntecedentsComponent', () => {
  let component: FuzzyNodeAntecedentsComponent;
  let fixture: ComponentFixture<FuzzyNodeAntecedentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeAntecedentsComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeAntecedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
