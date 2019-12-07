import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Group3Page } from './group3.page';

const routes: Routes = [
  {
    path: '',
    component: Group3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Group3PageRoutingModule {}
