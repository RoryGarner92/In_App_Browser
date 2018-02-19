import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
  ) { }

  openWebpage(url:string){

    const options: InAppBrowserOptions = {zoom: 'no'};
    const browser = this.inAppBrowser.create(url, '_self',);

  }

}
