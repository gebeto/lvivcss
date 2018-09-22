import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersViewComponent } from './partners-view.component';
import { PartnersViewRoutingModule } from './partners-view-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PartnersViewRoutingModule
  ],
  declarations: [PartnersViewComponent]
})
export class PartnersViewModule { }
