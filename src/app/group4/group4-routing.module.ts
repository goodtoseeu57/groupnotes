import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group4Page } from './group4.page';

const routes: Routes = [
  {
    path: '',
    component: Group4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group4PageRoutingModule {}
