import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', loadChildren: './index-view/index-view.module#IndexViewModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);