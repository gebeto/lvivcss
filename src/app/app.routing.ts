import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './index-view/index-view.module#IndexViewModule' },
  { path: 'speakers', loadChildren: './speakers-view/speakers-view.module#SpeakersViewModule' },
  { path: 'partners', loadChildren: './partners-view/partners-view.module#PartnersViewModule' },
  { path: 'topics', loadChildren: './topic-view/topic-view.module#TopicViewModule' },
  { path: 'tickets', loadChildren: './tickets-view/tickets-view.module#TicketsViewModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
