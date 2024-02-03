import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Operator } from '../../enums/operator.enum';
import { Term } from '../../enums/term.enum';
import { Antecedent } from '../../models/antecedent';
import { ExpressionItem } from '../../models/expression-item';
import { FuzzyNodePageMediator } from '../../services/fuzzy-node-page.mediator';

@Component({
  selector: 'app-fuzzy-node-rules-expression',
  templateUrl: './fuzzy-node-rules-expression.component.html',
  styleUrls: ['./fuzzy-node-rules-expression.component.scss'],
})
export class FuzzyNodeRulesExpressionComponent {
  private _items$ = new BehaviorSubject<ExpressionItem[]>([{ isOperator: false, value: null }]);

  termOptions$: Observable<SelectItem<Antecedent>[]> = this.mediator.antecedents$.pipe(
    map(as => as.map(a => ({ value: a, label: a.name }))),
  );
  items$: Observable<ExpressionItem[]> = this._items$.asObservable();
  operatorOptions: SelectItem<Operator>[] = [
    { value: Operator.And, label: '&&' },
    { value: Operator.Or, label: '||' },
  ];

  constructor(private mediator: FuzzyNodePageMediator) {}

  selectAntecedent(e: any, index: number): void {
    console.log('Select antecedent', e, index);
    if (index + 1 === this._items$.value.length)
      this._items$.next([...this._items$.value, { isOperator: true, value: null }]);
  }

  selectOperator(e: any, index: number): void {
    console.log('Select operator', e, index);

    if (index + 1 === this._items$.value.length)
      this._items$.next([...this._items$.value, { isOperator: false, value: null }]);
  }

  removeAt(index: number): void {
    const items = this._items$.value;
    this._items$.next([...items.slice(0, index), ...items.slice(index + 1)]);
  }

  addExpressionItem(): void {
    const items = this._items$.value;
    console.log(items.at(-1));

    const isOperator: boolean = !!items.length && !items.at(-1)?.isOperator;
    this._items$.next([...items, { isOperator, value: null }]);
  }
}
