import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyBbK3cIjwQh7DmUwXKp4_ONyF1cFx1s0sA",
      authDomain: "hackathaon-pune.firebaseapp.com",
      databaseURL: "https://hackathaon-pune.firebaseio.com",
      projectId: "hackathaon-pune",
      storageBucket: "hackathaon-pune.appspot.com",
      messagingSenderId: "396284685494"
    });

  }
}

