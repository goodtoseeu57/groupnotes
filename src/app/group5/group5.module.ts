import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group5PageRoutingModule } from './group5-routing.module';

import { Group5Page } from './group5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group5PageRoutingModule
  ],
  declarations: [Group5Page]
})
export class Group5PageModule {}
