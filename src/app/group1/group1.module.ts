import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group1PageRoutingModule } from './group1-routing.module';

import { Group1Page } from './group1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group1PageRoutingModule
  ],
  declarations: [Group1Page]
})
export class Group1PageModule {}
