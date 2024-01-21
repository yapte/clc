import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Rule } from '../../models/rule';
import { FuzzyNodePageMediator } from '../../services/fuzzy-node-page.mediator';

@Component({
  selector: 'app-fuzzy-node-rules',
  templateUrl: './fuzzy-node-rules.component.html',
  styleUrls: ['./fuzzy-node-rules.component.scss'],
})
export class FuzzyNodeRulesComponent {
  private uniqNameValidator: ValidatorFn = (control: AbstractControl) => {
    const value: string = control.value ?? '';
    const isNameExist: boolean = this.mediator.isRuleNameExist(value);

    if (!isNameExist) return null;

    return { notUniqName: true } as ValidationErrors;
  };

  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, this.uniqNameValidator]),
  });

  rules$: Observable<Rule[]> = this.mediator.rules$;

  constructor(private mediator: FuzzyNodePageMediator) {}

  create(): void {
    const item: Rule = { name: this.form.controls.name.value! };
    this.mediator.addRule(item);
    this.form.reset();
  }
}
