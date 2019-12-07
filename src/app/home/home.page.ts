import { Component } from '@angular/core';
import {AlertController, MenuController} from '@ionic/angular';


export interface Notes {
  text: string;
  group: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newNote: string;
  showNotifications = false;

  Notes = [
    { text: 'Meeting Peter ', group: 'main-group', date: new Date() },
    { text: 'Meeting Nick ', group: 'main-group', date: new Date() },
    { text: 'Meeting Drew ', group: 'main-group', date: new Date() },
    { text: 'Meeting Raju ', group: 'main-group', date: new Date()}];


  constructor(public alertCtrl: AlertController , public menu: MenuController ) {}

  ionViewWillEnter() {
    console.table(this.Notes);
  }
  showNotificationsDetails() {
    this.showNotifications = !this.showNotifications;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  delete(index) {
    console.log('you can do it the re inside the chip');
    this.Notes.splice(index, 1);
  }

  addNote() {
    if (this.newNote) {
      console.log(`${this.newNote} is working`);
      this.Notes.push({ text: this.newNote, group: 'main-group', date: new Date() });
    }
  }

  async update(index) {
    console.log(index);
    const alert = await this.alertCtrl.create({
      header: `Do you want to update it? ${this.Notes[index].text}`,
      inputs: [{ name: 'editTask', placeholder: 'update the note' }],
      buttons: [{ text: 'Cancel', role: 'Cancel' },
        {
          text: 'Update', handler: data => {
            this.Notes[index].text = data.editTask;
            this.Notes[index].date = new Date();
          } // using a promise
        }]
      // you can update it directly
    });
    await alert.present();
  }

}
