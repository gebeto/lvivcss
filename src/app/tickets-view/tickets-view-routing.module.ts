import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsViewComponent } from './tickets-view.component';

const routes: Routes = [{
  path: '',
  component: TicketsViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsViewRoutingModule { }
