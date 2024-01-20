import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeRulesComponent } from './fuzzy-node-rules.component';

describe('FuzzyNodeRulesComponent', () => {
  let component: FuzzyNodeRulesComponent;
  let fixture: ComponentFixture<FuzzyNodeRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeRulesComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
