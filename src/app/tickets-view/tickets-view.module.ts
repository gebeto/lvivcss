import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsViewRoutingModule } from './tickets-view-routing.module';
import { TicketsViewComponent } from './tickets-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TicketsViewRoutingModule,
  ],
  declarations: [TicketsViewComponent]
})
export class TicketsViewModule { }
