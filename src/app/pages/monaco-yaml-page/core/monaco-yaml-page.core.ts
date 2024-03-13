import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeLibrarySchemeDto } from '../ui/models/node-library-scheme.dto';
import { PipelineJsonService } from './pipeline-json.service';

@Injectable()
export class MonacoYamlPageCore {
  constructor(private readonly json: PipelineJsonService) {}

  getNodeLibrary$(): Observable<NodeLibrarySchemeDto> {
    return this.json.getNodeLibrary$();
  }
}
