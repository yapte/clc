import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeChartComponent } from './fuzzy-node-chart.component';

describe('FuzzyNodeChartComponent', () => {
  let component: FuzzyNodeChartComponent;
  let fixture: ComponentFixture<FuzzyNodeChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeChartComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
