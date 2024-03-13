import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedLayoutComponent, LoginLayoutComponent } from '@layouts';

const routes: Routes = [
  {
    path: 'login',
    // TODO: to know about routing with standalone components
    // loadComponent: () => import('./layouts/login-layout/login-layout.component').then(m => m.LoginLayoutComponent),
    component: LoginLayoutComponent,
    canActivate: [
      /** TODO: Guard */
    ],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),
      },
      // { path: 'restore', loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule) },
    ],
  },

  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      {
        path: 'signals',
        loadChildren: () => import('./pages/signals-page/signals-page.module').then(m => m.SignalsPageModule),
      },
      {
        path: 'yaml',
        loadChildren: () => import('./pages/yaml-page/yaml-page.module').then(m => m.YamlPageModule),
      },
      {
        path: 'fuzzy-node',
        loadChildren: () => import('./pages/fuzzy-node-page/fuzzy-node-page.module').then(m => m.FuzzyNodePageModule),
      },
      {
        path: 'monaco-yaml',
        loadChildren: () =>
          import('./pages/monaco-yaml-page/monaco-yaml-page.module').then(m => m.MonacoYamlPageModule),
      },
    ],
    canActivate: [
      /** TODO: Guard */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
