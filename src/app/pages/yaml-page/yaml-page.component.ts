import { Component, OnInit } from '@angular/core';
import { YamlPageMediator } from './ui/services/yaml-page.mediator';
import { YamlPageCore } from './core/yaml-page.core';
import { YamlPageData } from './data/yaml-page.data';

@Component({
  selector: 'app-yaml-page.component',
  templateUrl: 'yaml-page.component.html',
  styleUrls: ['./yaml-page.component.scss'],
  providers: [YamlPageMediator, { provide: YamlPageCore, useClass: YamlPageData }],
})
export class YamlPageComponent implements OnInit {
  yamlInputData = '';

  constructor(private readonly mediator: YamlPageMediator) {}

  ngOnInit(): void {
    this.mediator.init();
  }
}
