import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-group1',
  templateUrl: './group1.page.html',
  styleUrls: ['./group1.page.scss'],
})
export class Group1Page implements OnInit {

  constructor(public menu: MenuController , public navCtrl: NavController ) { }

  ngOnInit() {
  }

  openMenu() {
    console.log('works ');
    this.menu.enable(true, 'menu'); // should be menu id
    this.menu.open('menu');
  }

  goBack() {
    this.navCtrl.pop();
  }


}
