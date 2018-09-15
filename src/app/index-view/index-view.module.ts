import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexViewRoutingModule } from './index-view-routing.module';
import { IndexViewComponent } from './index-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IndexViewRoutingModule,
    SharedModule
  ],
  declarations: [IndexViewComponent]
})
export class IndexViewModule { }
