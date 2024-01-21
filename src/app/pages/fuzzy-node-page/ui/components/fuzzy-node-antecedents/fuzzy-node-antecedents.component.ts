import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Antecedent } from '../../models/antecedent';
import { FuzzyNodePageMediator } from '../../services/fuzzy-node-page.mediator';

@Component({
  selector: 'app-fuzzy-node-antecedents',
  templateUrl: './fuzzy-node-antecedents.component.html',
  styleUrls: ['./fuzzy-node-antecedents.component.scss'],
})
export class FuzzyNodeAntecedentsComponent {
  uniqNameValidator: ValidatorFn = (control: AbstractControl) => {
    const value: string = control.value ?? '';
    const isNameExist: boolean = this.mediator.isAntecedentNameExist(value);

    if (!isNameExist) return null;

    return { notUniqName: true } as ValidationErrors;
  };

  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, this.uniqNameValidator]),
  });

  antecedents$: Observable<Antecedent[]> = this.mediator.antecedents$;

  constructor(private mediator: FuzzyNodePageMediator) {}

  create(): void {
    const item: Antecedent = { name: this.form.controls.name.value! };
    this.mediator.addAntecedent(item);
    this.form.reset();
  }
}
