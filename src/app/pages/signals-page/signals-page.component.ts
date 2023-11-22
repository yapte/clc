import { Component, OnInit } from '@angular/core';
import { Signal } from '@common';
import { Observable } from 'rxjs';
import { SignalsPageMediator } from './ui/services/signals-page.mediator';
import { SignalsPageCore } from './core/signals-page.core';
import { SignalsPageData } from './data/signals-page.data';
import { DialogService } from 'primeng/dynamicdialog';
import { SignalCreateModalComponent } from './ui/components/signal-create-modal/signal-create-modal.component';

@Component({
  selector: 'app-signals-page',
  templateUrl: './signals-page.component.html',
  styleUrls: ['./signals-page.component.scss'],
  providers: [
    SignalsPageMediator,
    { provide: SignalsPageCore, useClass: SignalsPageData },
    DialogService,
  ]
})
export class SignalsPageComponent implements OnInit {
  list$: Observable<Signal[]> = this.mediator.list$;

  constructor(
    private readonly mediator: SignalsPageMediator,
    private readonly dialog: DialogService,

  ) { }

  ngOnInit(): void {
    this.mediator.init();
  }

  search(e: Event): void {
    const text = (e.target as HTMLInputElement).value;
    this.mediator.search(text);
  }

  showCreateModal(): void {
    this.dialog.open(SignalCreateModalComponent, {});
  }
}
