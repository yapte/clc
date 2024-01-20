import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YamlPageRoutingModule } from './yaml-page-routing.module';
import { YamlPageComponent } from './yaml-page.component';
import { YamlEditorComponent } from './ui/components/yaml-editor/yaml-editor.component';

@NgModule({
  declarations: [YamlPageComponent, YamlEditorComponent],
  imports: [CommonModule, YamlPageRoutingModule],
})
export class YamlPageModule {}
