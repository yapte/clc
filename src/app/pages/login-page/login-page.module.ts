import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,

    ButtonModule,
    InputTextModule,
    PasswordModule,
  ]
})
export class LoginPageModule { }
