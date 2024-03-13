import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NodeLibrarySchemeDto } from '../ui/models/node-library-scheme.dto';

const BASE_JSON_SCHEME_PATH = 'assets/schemas/demo_pf_ui_schema_full_draft_v2.json';

export class PipelineJsonService {
  private readonly http = inject(HttpClient);

  getNodeLibrary$(): Observable<NodeLibrarySchemeDto> {
    return this.http.get<NodeLibrarySchemeDto>(BASE_JSON_SCHEME_PATH);
  }

  getNodeLibraryFromFile$(file: File): Observable<NodeLibrarySchemeDto> {
    const reader: FileReader = new FileReader();

    reader.readAsText(file);

    return fromEvent(reader, 'loadend').pipe(map(() => JSON.parse(reader.result as string) as NodeLibrarySchemeDto));
  }
}
