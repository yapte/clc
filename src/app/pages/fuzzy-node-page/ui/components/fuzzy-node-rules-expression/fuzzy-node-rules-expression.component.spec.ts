import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeRulesExpressionComponent } from './fuzzy-node-rules-expression.component';

describe('FuzzyNodeRulesExpressionComponent', () => {
  let component: FuzzyNodeRulesExpressionComponent;
  let fixture: ComponentFixture<FuzzyNodeRulesExpressionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeRulesExpressionComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeRulesExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
