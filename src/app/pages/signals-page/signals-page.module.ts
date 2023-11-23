import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsPageRoutingModule } from './signals-page-routing.module';
import { SignalsPageComponent } from './signals-page.component';
import { SignalCreateModalComponent } from './ui/components/signal-create-modal/signal-create-modal.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    SignalsPageComponent,
    SignalCreateModalComponent
  ],
  imports: [
    CommonModule,
    SignalsPageRoutingModule,
    ReactiveFormsModule,

    ButtonModule,
    DynamicDialogModule,
    InputTextareaModule,
    InputTextModule,
    TableModule,
  ]
})
export class SignalsPageModule { }
