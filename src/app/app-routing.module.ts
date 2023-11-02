import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedLayoutComponent, LoginLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: 'login',
    // TODO: to know about routing with standalone components
    // loadComponent: () => import('./layouts/login-layout/login-layout.component').then(m => m.LoginLayoutComponent),
    component: LoginLayoutComponent,
    canActivate: [/** TODO: Guard */],
    children: [
      { path: '', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
    ],
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
