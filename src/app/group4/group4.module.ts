import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group4PageRoutingModule } from './group4-routing.module';

import { Group4Page } from './group4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group4PageRoutingModule
  ],
  declarations: [Group4Page]
})
export class Group4PageModule {}
