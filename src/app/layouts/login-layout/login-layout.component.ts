import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginLayoutRoutingModule } from './login-layout-routing.module';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoginLayoutRoutingModule,
  ],
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {

}
