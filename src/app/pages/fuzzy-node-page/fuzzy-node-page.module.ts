import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuzzyNodePageRoutingModule } from './fuzzy-node-page-routing.module';
import { FuzzyNodePageComponent } from './fuzzy-node-page.component';
import { ButtonModule } from 'primeng/button';
import { FuzzyNodeNavComponent } from './ui/components/fuzzy-node-nav/fuzzy-node-nav.component';
import { FuzzyNodeAntecedentsComponent } from './ui/components/fuzzy-node-antecedents/fuzzy-node-antecedents.component';
import { FuzzyNodeRulesComponent } from './ui/components/fuzzy-node-rules/fuzzy-node-rules.component';
import { FuzzyNodeConsequencesComponent } from './ui/components/fuzzy-node-consequences/fuzzy-node-consequences.component';


@NgModule({
  declarations: [
    FuzzyNodePageComponent,
    FuzzyNodeNavComponent,
    FuzzyNodeAntecedentsComponent,
    FuzzyNodeRulesComponent,
    FuzzyNodeConsequencesComponent,
  ],
  imports: [
    CommonModule,
    FuzzyNodePageRoutingModule,

    ButtonModule,
  ]
})
export class FuzzyNodePageModule { }
