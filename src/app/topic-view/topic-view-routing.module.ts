import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicViewComponent } from './topic-view/topic-view.component';

const routes: Routes = [{
  path: '',
  component: TopicViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicViewRoutingModule { }
