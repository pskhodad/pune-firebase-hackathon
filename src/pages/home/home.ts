import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  message:string; 
  encMessage:string; 
  decMessage:string; 
  
  constructor(public navCtrl: NavController) {
    firebase.database().ref('/messages/encrypted').on('value', (snapshot) => {
      this.encMessage = snapshot.val();
    })

    firebase.database().ref('/messages/decrypted').on('value', (snapshot) => {
      this.decMessage = snapshot.val();
    })
  }

  onEncrypt() {
    console.log(this.message);
    if (this.message != null) {
      // Get the Database service for the default app
      /* var defaultDatabase = */ firebase.database().ref('/messages').set({
        original: this.message
      });
    }
  }

}
