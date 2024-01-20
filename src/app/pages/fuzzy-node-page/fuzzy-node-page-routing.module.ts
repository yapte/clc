import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuzzyNodePageComponent } from './fuzzy-node-page.component';

const routes: Routes = [
  { path: '', component: FuzzyNodePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuzzyNodePageRoutingModule { }
