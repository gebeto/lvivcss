import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersViewComponent } from './speakers-view.component';
import { SpeakersViewRoutingModule } from './speakers-view-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SpeakersViewRoutingModule,
    SharedModule
  ],
  declarations: [SpeakersViewComponent]
})
export class SpeakersViewModule { }
