import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedLayoutComponent, LoginLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
    canActivate: [/** TODO: Guard */],
  },

  {
    path: '',
    component: AuthorizedLayoutComponent,
    canActivate: [/** TODO: Guard */],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
