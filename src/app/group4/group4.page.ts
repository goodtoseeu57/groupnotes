import { Component, OnInit } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-group4',
  templateUrl: './group4.page.html',
  styleUrls: ['./group4.page.scss'],
})
export class Group4Page implements OnInit {

  constructor(public popoverCtrl: PopoverController , public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismissPopover() {
    await  this.popoverCtrl.dismiss();
  }

  async dismissModal() {
    await  this.modalCtrl.dismiss();
  }



}
