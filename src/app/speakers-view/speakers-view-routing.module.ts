import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeakersViewComponent } from './speakers-view.component';

const routes: Routes = [{
  path: '',
  component: SpeakersViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersViewRoutingModule { }
