import { Component, OnInit } from '@angular/core';
import { FuzzyNodePageMediator } from './ui/services/fuzzy-node-page.mediator';
import { FuzzyNodePageData } from './data/fuzzy-node-page.data';
import { FuzzyNodePageCore } from './core/fuzzy-node-page.core';

@Component({
  selector: 'app-fuzzy-node-page.component',
  templateUrl: 'fuzzy-node-page.component.html',
  styleUrls: ['./fuzzy-node-page.component.scss'],
  providers: [FuzzyNodePageMediator, { provide: FuzzyNodePageCore, useClass: FuzzyNodePageData }],
})
export class FuzzyNodePageComponent implements OnInit {
  constructor(private readonly mediator: FuzzyNodePageMediator) {}

  ngOnInit(): void {
    this.mediator.init();
  }
}