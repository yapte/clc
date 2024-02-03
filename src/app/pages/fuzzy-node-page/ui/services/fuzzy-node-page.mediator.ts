import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, tap } from 'rxjs';

import { FuzzyNodePageCore } from '../../core/fuzzy-node-page.core';
import { Tab } from '../enums/tab.enum';
import { Term } from '../enums/term.enum';
import { Antecedent } from '../models/antecedent';
import { Consequence } from '../models/consequence';
import { Rule } from '../models/rule';
import { TermFormValue } from '../models/term-form-value';

@Injectable()
export class FuzzyNodePageMediator {
  private _openedTab$ = new BehaviorSubject<Tab>(Tab.Antecedents);
  private _antecedents$ = new BehaviorSubject<Antecedent[]>([]);
  private _consequences$ = new BehaviorSubject<Consequence[]>([]);
  private _rules$ = new BehaviorSubject<Rule[]>([]);

  openedTab$: Observable<Tab> = this._openedTab$.asObservable();
  antecedents$: Observable<Antecedent[]> = this._antecedents$.asObservable();
  consequences$: Observable<Consequence[]> = this._consequences$.asObservable();
  rules$: Observable<Rule[]> = this._rules$.asObservable();

  constructor(private readonly core: FuzzyNodePageCore) {}

  openTab(tab: Tab): void {
    this._openedTab$.next(tab);
  }

  ///
  /// Antecedents
  ///
  addAntecedent(antecedent: Antecedent): void {
    const list: Antecedent[] = this._antecedents$.value;
    this._antecedents$.next([...list, antecedent]);
  }

  removeAntecedentByName(name: string): void {
    const list: Antecedent[] = this._antecedents$.value;
    this._antecedents$.next(list.filter(i => i.name !== name));
  }

  saveAntecedentParams(name: string, params: Record<Term, TermFormValue>): void {
    const antecedent: Antecedent | undefined = this._antecedents$.value.find(a => a.name === name);
    if (!antecedent) return;

    antecedent.params = params;
  }

  isAntecedentNameExist(name: string): boolean {
    return !!this._antecedents$.value.find(a => a.name === name);
  }

  ///
  /// Consequences
  ///

  // TODO:

  ///
  /// Rules
  ///

  addRule(rule: Rule): void {
    const list: Rule[] = this._rules$.value;
    this._rules$.next([...list, rule]);
  }

  isRuleNameExist(name: string): boolean {
    return !!this._rules$.value.find(r => r.name === name);
  }
}
