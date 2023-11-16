import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsApi } from '@shared/api';
import { SignalsRpcApi } from 'src/app/shared/api/services/signals.rpc.api';

@Component({
  selector: 'app-authorized-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss']
})
export class AuthorizedLayoutComponent {

  signals$ = this.signalsApi.getList();
  signalsRpc$ = this.signalsRpcApi.getList();

  constructor(
    private signalsApi: SignalsApi,
    private signalsRpcApi: SignalsRpcApi,
  ) { }
}
