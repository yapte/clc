import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { FuzzyNodePageRoutingModule } from './fuzzy-node-page-routing.module';
import { FuzzyNodePageComponent } from './fuzzy-node-page.component';
import { FuzzyNodeNavComponent } from './ui/components/fuzzy-node-nav/fuzzy-node-nav.component';
import { FuzzyNodeAntecedentsComponent } from './ui/components/fuzzy-node-antecedents/fuzzy-node-antecedents.component';
import { FuzzyNodeRulesComponent } from './ui/components/fuzzy-node-rules/fuzzy-node-rules.component';
import { FuzzyNodeConsequencesComponent } from './ui/components/fuzzy-node-consequences/fuzzy-node-consequences.component';
import { FuzzyNodeChartComponent } from './ui/components/fuzzy-node-chart/fuzzy-node-chart.component';
import { FuzzyNodeItemFormComponent } from './ui/components/fuzzy-node-item-form/fuzzy-node-item-form.component';
import { FuzzyNodeYamlEditorComponent } from './ui/components/fuzzy-node-yaml-editor/fuzzy-node-yaml-editor.component';
import { FuzzyNodeRuleFormComponent } from './ui/components/fuzzy-node-rule-form/fuzzy-node-rule-form.component';
import { FuzzyNodeRulesExpressionComponent } from './ui/components/fuzzy-node-rules-expression/fuzzy-node-rules-expression.component';

@NgModule({
  declarations: [
    FuzzyNodePageComponent,
    FuzzyNodeNavComponent,
    FuzzyNodeAntecedentsComponent,
    FuzzyNodeRulesComponent,
    FuzzyNodeConsequencesComponent,
    FuzzyNodeChartComponent,
    FuzzyNodeItemFormComponent,
    FuzzyNodeYamlEditorComponent,
    FuzzyNodeRuleFormComponent,
    FuzzyNodeRulesExpressionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuzzyNodePageRoutingModule,

    ButtonModule,
    ChartModule,
    CheckboxModule,
    ChipModule,
    DividerModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    OverlayPanelModule,
  ],
})
export class FuzzyNodePageModule {}
