import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { filter, tap } from 'rxjs';
import { BoundType } from '../../enums/bound-type.enum';
import { Term } from '../../enums/term.enum';
import { Antecedent } from '../../models/antecedent';
import { TermFormType } from '../../models/term-form-type';
import { TermFormValue } from '../../models/term-form-value';
import { FuzzyNodePageMediator } from '../../services/fuzzy-node-page.mediator';

@Component({
  selector: 'app-fuzzy-node-item-form',
  templateUrl: './fuzzy-node-item-form.component.html',
  styleUrls: ['./fuzzy-node-item-form.component.scss'],
})
export class FuzzyNodeItemFormComponent implements OnInit {
  @Input({ required: true }) antecedent!: Antecedent;
  // @Input({ required: true }) index!: number;

  availableTerms: Term[] = [Term.CritLow, Term.Low, Term.Ok, Term.High, Term.CritHigh];
  boundTypeOptions: SelectItem<BoundType>[] = [
    { value: BoundType.Triangle, label: 'Triangle' },
    { value: BoundType.Trapezoida, label: 'Trapezoida' },
  ];

  form = new FormGroup({
    [Term.CritLow]: this._generateTermForm(Term.CritLow),
    [Term.Low]: this._generateTermForm(Term.Low),
    [Term.Ok]: this._generateTermForm(Term.Ok),
    [Term.High]: this._generateTermForm(Term.High),
    [Term.CritHigh]: this._generateTermForm(Term.CritHigh),
  });

  constructor(private mediator: FuzzyNodePageMediator, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        tap(value => this.mediator.saveAntecedentParams(this.antecedent.name, value as Record<Term, TermFormValue>)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  remove(): void {
    this.mediator.removeAntecedentByName(this.antecedent.name);
  }

  private _generateTermForm(term: Term): FormGroup<TermFormType> {
    const form = new FormGroup<TermFormType>({
      label: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      term: new FormControl<Term>(term, { nonNullable: true, validators: [Validators.required] }),
      boundType: new FormControl<BoundType>(BoundType.Triangle, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      a: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      b: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      c: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      d: new FormControl<number>(
        { value: 0, disabled: true },
        { nonNullable: true, validators: [Validators.required] },
      ),
    });

    const { boundType, d } = form.controls;
    boundType.valueChanges
      .pipe(
        tap(value => (value === BoundType.Triangle ? d.disable() : d.enable())),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    return form;
  }
}
