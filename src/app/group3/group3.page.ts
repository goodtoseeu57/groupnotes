import { Component, OnInit } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {Group4Page} from '../group4/group4.page';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-group3',
  templateUrl: './group3.page.html',
  styleUrls: ['./group3.page.scss'],
})
export class Group3Page implements OnInit {

  constructor(public popoverController: PopoverController , public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Group4Page,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  async presentModal() {
    const modal = await  this.modalCtrl.create({
      component: HomePage,
      componentProps: {
        showButton: true,
      }
    });
    return await modal.present();
  }
  segmentChanged(ev: any) {
    console.log(`segment changed ${ev.valueOf()}`);
  }


}
