import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCreateModalComponent } from './signal-create-modal.component';

describe('SignalCreateModalComponent', () => {
  let component: SignalCreateModalComponent;
  let fixture: ComponentFixture<SignalCreateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalCreateModalComponent]
    });
    fixture = TestBed.createComponent(SignalCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
