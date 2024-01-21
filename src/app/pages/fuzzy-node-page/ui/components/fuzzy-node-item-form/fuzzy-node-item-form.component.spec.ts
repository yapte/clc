import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeItemFormComponent } from './fuzzy-node-item-form.component';

describe('FuzzyNodeItemFormComponent', () => {
  let component: FuzzyNodeItemFormComponent;
  let fixture: ComponentFixture<FuzzyNodeItemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeItemFormComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
