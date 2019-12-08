import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Group4Page} from './group4/group4.page';
import {Group5Page} from './group5/group5.page';
import {HomePage} from './home/home.page';
import {HomePageModule} from './home/home.module';


@NgModule({
  declarations: [AppComponent , Group4Page , Group5Page ],
  entryComponents: [Group4Page , Group5Page , HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , FormsModule , HomePageModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
