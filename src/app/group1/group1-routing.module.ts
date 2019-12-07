import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group1Page } from './group1.page';

const routes: Routes = [
  {
    path: '',
    component: Group1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group1PageRoutingModule {}
