import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Edit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  editPatient(){
    
    
  }

}
