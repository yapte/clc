import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignalsPageMediator } from '../../services/signals-page.mediator';
import { SignalCreate } from '../../../core/models/signal-create';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-signal-create-modal',
  templateUrl: './signal-create-modal.component.html',
  styleUrls: ['./signal-create-modal.component.scss']
})
export class SignalCreateModalComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>(''),
  });

  constructor(
    private readonly mediator: SignalsPageMediator,
    private readonly dialogRef: DynamicDialogRef,
  ) { }

  submit(): void {
    this.mediator.create(this.form.value as SignalCreate);
  }
}
