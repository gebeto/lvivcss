import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleViewComponent } from './schedule-view.component';

const routes: Routes = [{
  path: '',
  component: ScheduleViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleViewRoutingModule { }
