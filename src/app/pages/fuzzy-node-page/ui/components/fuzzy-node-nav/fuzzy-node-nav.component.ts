import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tab } from '../../enums/tab.enum';
import { Antecedent } from '../../models/antecedent';
import { Consequence } from '../../models/consequence';
import { Rule } from '../../models/rule';
import { FuzzyNodePageMediator } from '../../services/fuzzy-node-page.mediator';

@Component({
  selector: 'app-fuzzy-node-nav',
  templateUrl: './fuzzy-node-nav.component.html',
  styleUrls: ['./fuzzy-node-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuzzyNodeNavComponent {
  Tab = Tab;

  antecedents$: Observable<Antecedent[]> = this.mediator.antecedents$;
  consequences$: Observable<Consequence[]> = this.mediator.consequences$;
  rules$: Observable<Rule[]> = this.mediator.rules$;

  constructor(private mediator: FuzzyNodePageMediator) {}

  goTo(tab: Tab): void {
    this.mediator.openTab(tab);
  }
}
