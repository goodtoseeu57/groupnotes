import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group2PageRoutingModule } from './group2-routing.module';

import { Group2Page } from './group2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group2PageRoutingModule
  ],
  declarations: [Group2Page]
})
export class Group2PageModule {}
