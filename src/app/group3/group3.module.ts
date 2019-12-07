import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Group3PageRoutingModule } from './group3-routing.module';

import { Group3Page } from './group3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Group3PageRoutingModule
  ],
  declarations: [Group3Page]
})
export class Group3PageModule {}
