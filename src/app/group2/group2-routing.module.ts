import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group2Page } from './group2.page';

const routes: Routes = [
  {
    path: '',
    component: Group2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group2PageRoutingModule {}
