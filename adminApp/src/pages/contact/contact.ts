import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  admins: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
    this.admins = af.database.list('/admin');
  }

}
