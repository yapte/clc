import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  private _schema: any;

  init(schema: any): void {
    this._schema = schema;
  }

  getSchemaForNodeType(nodeType: string): any {
    const nodeTypeScheme = this._schema['$defs']['pplfw_nodes'][nodeType]?.['properties']?.['params'] ?? {};
    nodeTypeScheme['$defs'] = JSON.parse(JSON.stringify(this._schema['$defs']));
    return nodeTypeScheme;
  }
}
