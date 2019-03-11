import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportersViewComponent } from './supporters-view.component';

const routes: Routes = [{
  path: '',
  component: SupportersViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportersViewRoutingModule { }
