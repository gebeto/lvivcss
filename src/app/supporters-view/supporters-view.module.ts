import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportersViewRoutingModule } from './supporters-view-routing.module';
import { SupportersViewComponent } from './supporters-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SupportersViewRoutingModule,
    SharedModule
  ],
  declarations: [SupportersViewComponent]
})
export class SupportersViewModule { }
