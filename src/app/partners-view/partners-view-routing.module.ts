import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersViewComponent } from './partners-view.component';

const routes: Routes = [{
  path: '',
  component: PartnersViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersViewRoutingModule { }
