import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeRuleFormComponent } from './fuzzy-node-rule-form.component';

describe('FuzzyNodeRuleFormComponent', () => {
  let component: FuzzyNodeRuleFormComponent;
  let fixture: ComponentFixture<FuzzyNodeRuleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeRuleFormComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
