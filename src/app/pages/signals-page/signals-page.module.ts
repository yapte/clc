import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsPageRoutingModule } from './signals-page-routing.module';
import { SignalsPageComponent } from './signals-page.component';
import { SignalCreateModalComponent } from './ui/components/signal-create-modal/signal-create-modal.component';
import { InputTextModule } from 'primeng/inputtext';
// import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignalsPageComponent,
    SignalCreateModalComponent
  ],
  imports: [
    CommonModule,
    SignalsPageRoutingModule,
    ReactiveFormsModule,

    InputTextModule,
    DynamicDialogModule,
  ]
})
export class SignalsPageModule { }
