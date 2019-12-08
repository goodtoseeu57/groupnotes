import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group5Page } from './group5.page';

const routes: Routes = [
  {
    path: '',
    component: Group5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group5PageRoutingModule {}
