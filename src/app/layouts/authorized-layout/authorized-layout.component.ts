import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsApi } from '@shared/api';
import { SignalsRpcApi } from 'src/app/shared/api/services/signals.rpc.api';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-authorized-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss'],
})
export class AuthorizedLayoutComponent {
  // signals$ = this.signalsApi.getList();
  // signalsRpc$ = this.signalsRpcApi.getList();
  // constructor(
  //   private signalsApi: SignalsApi,
  //   private signalsRpcApi: SignalsRpcApi,
  // ) { }
}
