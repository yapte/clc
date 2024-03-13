import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonacoYamlPageComponent } from './ui/monaco-yaml-page.component';

const routes: Routes = [
  { path: '', component: MonacoYamlPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonacoYamlPageRoutingModule { }
