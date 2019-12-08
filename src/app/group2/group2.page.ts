import { Component, OnInit , ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-group2',
  templateUrl: './group2.page.html',
  styleUrls: ['./group2.page.scss'],
})
export class Group2Page implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager: false
  };

  @ViewChild(IonSlides , {static: false}) slides: IonSlides ;
  isStart: boolean;
  isEnd: boolean;

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext().then(() => {

      this.slides.isBeginning().then((begining) => {
        this.isStart = begining;
      });

      this.slides.isEnd().then((end) => {
        this.isEnd = end;

      });


    }); // it returns a promise

  }

  prev() {
    this.slides.slidePrev().then(() => {

      this.slides.isBeginning().then((begining) => {
        this.isStart = begining;
      });

      this.slides.isEnd().then((end) => {
        this.isEnd = end;
      });

    });
  }


}
