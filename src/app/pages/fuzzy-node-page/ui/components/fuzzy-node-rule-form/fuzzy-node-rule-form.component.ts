import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rule } from '../../models/rule';

@Component({
  selector: 'app-fuzzy-node-rule-form',
  templateUrl: './fuzzy-node-rule-form.component.html',
  styleUrls: ['./fuzzy-node-rule-form.component.scss'],
})
export class FuzzyNodeRuleFormComponent {
  @Input({ required: true }) rule!: Rule;

  form = new FormGroup({
    // label: new FormControl<string>('', [Validators.required]),
    rule: new FormControl<string>('', [Validators.required]),
    terms: new FormArray([this._generateTermForm()]),
  });

  // TODO: form data type
  private _generateTermForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      term: new FormControl<string>('', [Validators.required]),
      factor: new FormControl<number>(0, [Validators.required]),
    });
  }
}
