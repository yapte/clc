import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Ace, edit } from 'ace-builds';
import 'ace-builds';
import 'ace-builds/src-noconflict/theme-dracula';

@Component({
  selector: 'app-fuzzy-node-yaml-editor',
  templateUrl: './fuzzy-node-yaml-editor.component.html',
  styleUrls: ['./fuzzy-node-yaml-editor.component.scss'],
})
export class FuzzyNodeYamlEditorComponent implements AfterViewInit, OnChanges {
  readonly MODE = 'yaml';

  @Input() text!: string;
  @Output() textChange = new EventEmitter<string>();

  @ViewChild('editor') editorRef!: ElementRef;

  editor!: Ace.Editor;
  // All possible options can be found at:
  // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
  options = {
    showPrintMargin: false,
    highlightActiveLine: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
    fontFamily: "'Roboto Mono Regular', monospace",
  };

  ngAfterViewInit(): void {
    this.initEditor_();
  }

  onTextChange(text: string): void {
    this.textChange.emit(text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.editor) return;

    if ('text' in changes) this.onExternalUpdate_();
  }

  private initEditor_(): void {
    this.editor = edit(this.editorRef.nativeElement);
    this.editor.setOptions(this.options);
    this.editor.setValue(this.text, -1);
    // this.editor.setTheme('ace/theme/crimson_editor');
    this.editor.session.setUseWorker(false);
    this.editor.on('change', () => this.onEditorTextChange_());
  }

  private onExternalUpdate_(): void {
    const point = this.editor.getCursorPosition();
    this.editor.setValue(this.text, -1);
    this.editor.moveCursorToPosition(point);
  }

  private onEditorTextChange_(): void {
    this.text = this.editor.getValue();
    this.onTextChange(this.text);
  }
}
