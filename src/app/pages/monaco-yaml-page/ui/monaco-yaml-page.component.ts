import { Component, OnInit } from '@angular/core';
import { ValidationService } from './services/validation.service';
import { PipelineJsonService } from '../core/pipeline-json.service';
import { BehaviorSubject, Observable, filter, tap } from 'rxjs';
import { NodeTypeDto } from './models/node-library-scheme.dto';
import { MonacoYamlPageCore } from '../core/monaco-yaml-page.core';

@Component({
  selector: 'app-monaco-yaml-page.component',
  templateUrl: './monaco-yaml-page.component.html',
  styleUrls: ['./monaco-yaml-page.component.scss'],
  providers: [ValidationService, PipelineJsonService, MonacoYamlPageCore],
})
export class MonacoYamlPageComponent implements OnInit {
  private _nodeTypeSchema$ = new BehaviorSubject<any>(null);
  private _nodeType$ = new BehaviorSubject<NodeTypeDto | null>(null);

  nodeTypeSchema$: Observable<any> = this._nodeTypeSchema$.pipe(filter(Boolean));
  nodeType$: Observable<NodeTypeDto> = this._nodeType$.pipe(filter(Boolean));
  nodeTypes: NodeTypeDto[] = [];

  constructor(private readonly core: MonacoYamlPageCore, private readonly validation: ValidationService) {}

  ngOnInit(): void {
    this.core
      .getNodeLibrary$()
      .pipe(
        tap(nl => {
          nl.nodes_lib.children.forEach(i1 => {
            this.nodeTypes.push(...i1.items);
            i1.children.forEach(i2 => {
              this.nodeTypes.push(...i2.items);
            });
          });
        }),
        tap(nl => this.validation.init(nl.graph_def_file_schema)),
      )
      .subscribe();
  }

  showEditorForNodeType(nodeType: NodeTypeDto): void {
    const nodeTypeSchema = this.validation.getSchemaForNodeType(nodeType.name);
    this._nodeType$.next(nodeType);
    this._nodeTypeSchema$.next(nodeTypeSchema);
  }
}
