import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlEditorComponent } from './fuzzy-node-yaml-editor.component';

describe('YamlEditorComponent', () => {
  let component: YamlEditorComponent;
  let fixture: ComponentFixture<YamlEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YamlEditorComponent]
    });
    fixture = TestBed.createComponent(YamlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
