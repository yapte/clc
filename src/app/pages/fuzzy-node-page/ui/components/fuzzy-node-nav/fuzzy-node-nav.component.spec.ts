import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyNodeNavComponent } from './fuzzy-node-nav.component';

describe('FuzzyNodeNavComponent', () => {
  let component: FuzzyNodeNavComponent;
  let fixture: ComponentFixture<FuzzyNodeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuzzyNodeNavComponent]
    });
    fixture = TestBed.createComponent(FuzzyNodeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
