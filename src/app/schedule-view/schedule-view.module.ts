import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleViewRoutingModule } from './schedule-view-routing.module';
import { ScheduleViewComponent } from './schedule-view.component';

@NgModule({
  imports: [
    CommonModule,
    ScheduleViewRoutingModule
  ],
  declarations: [ScheduleViewComponent]
})
export class ScheduleViewModule { }
