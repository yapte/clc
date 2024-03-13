import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Uri, editor } from 'monaco-editor/esm/vs/editor/editor.api';

import * as monaco from 'monaco-editor';
import { MonacoYaml, configureMonacoYaml } from 'monaco-yaml';
import { type JSONSchema7 } from 'json-schema';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
})
export class MonacoEditorComponent implements OnChanges, OnInit {
  private uri = 'a://bc/foo.yaml';
  private modelUri = Uri.parse(this.uri);
  private editorRef!: editor.IStandaloneCodeEditor;
  private yamlConfigRef: MonacoYaml = configureMonacoYaml(monaco);

  @Input() schema!: JSONSchema7;
  @ViewChild('editorContainer', { static: true }) _editorContainer!: ElementRef;

  ngOnInit(): void {
    this.editorRef = editor.create(this._editorContainer.nativeElement, {
      theme: 'vs-dark',
      wordWrap: 'on',
      //  wrappingIndent: 'indent',
      minimap: { enabled: true },
      automaticLayout: true,
      language: 'yaml',
      model: editor.createModel('', 'yaml', this.modelUri),
    });
    this.setScheme();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('schema' in changes && this.schema) this.setScheme();
  }

  private setScheme(): void {
    if (!this.yamlConfigRef) return;

    this.yamlConfigRef.update({
      schemas: [
        {
          schema: this.schema,
          fileMatch: [this.uri],
          uri: this.uri,
        },
      ],
    });
  }
}

const SCHEMA1 = {
  title: 'Node parameters',
  description: 'All parameters that needed to init the node',
  type: 'object',
  properties: {
    mv_columns: {
      title: 'Mv columns',
      description: 'Column names of manipulated variables',
      type: 'array',
      items: {
        type: 'string',
      },
    },
    step_limits: {
      title: 'Step limits',
      description: 'Values for each setpoint to make bounds more precisely',
      type: 'object',
      additionalProperties: {
        anyOf: [
          {
            type: 'integer',
          },
          {
            type: 'number',
          },
        ],
      },
    },
    tech_hi: {
      title: 'Tech hi',
      description: 'Mapping tech lower bound for each manipulated variable',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    },
    tech_lo: {
      title: 'Tech lo',
      description: 'Mapping tech higher bound for each manipulated variable',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    },
    inner_lo: {
      title: 'Inner lo',
      description: 'Our lower bounds mapping for each manipulated variable.',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    },
    inner_hi: {
      title: 'Inner hi',
      description: 'Our higher bounds mapping for each manipulated variable.',
      type: 'object',
      additionalProperties: {
        type: 'string',
      },
    },
  },
  required: ['mv_columns', 'step_limits', 'tech_hi', 'tech_lo', 'inner_lo', 'inner_hi'],
  additionalProperties: false,
};

const SCHEMA2 = {
  type: 'object',
  properties: {
    p1: {
      enum: ['v1', 'v2'],
    },
    p2: {
      enum: ['v1', 'v2'],
      // Reference the second schema
      // $ref: 'http://myserver/bar-schema.json',
    },
  },
  require: ['p1'],
};
