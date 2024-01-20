import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YamlPageComponent } from './yaml-page.component';

const routes: Routes = [{ path: '', component: YamlPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YamlPageRoutingModule {}
