import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicViewRoutingModule } from './topic-view-routing.module';
import { TopicViewComponent } from './topic-view/topic-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TopicViewRoutingModule,
    SharedModule
  ],
  declarations: [TopicViewComponent]
})
export class TopicViewModule { }
