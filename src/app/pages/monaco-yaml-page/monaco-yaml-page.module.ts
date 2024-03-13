import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonacoYamlPageRoutingModule } from './monaco-yaml-page-routing.module';
import { MonacoYamlPageComponent } from './ui/monaco-yaml-page.component';
import { MonacoEditorComponent } from './ui/components/monaco-editor/monaco-editor.component';

@NgModule({
  declarations: [MonacoYamlPageComponent, MonacoEditorComponent],
  imports: [CommonModule, MonacoYamlPageRoutingModule],
})
export class MonacoYamlPageModule {}
