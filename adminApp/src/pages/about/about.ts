import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	users: FirebaseListObservable<any>;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
		this.users = angFire.database.list('/doctors');
  	}

  	addDoctor(): void{
  		let prompt = this.alertCtrl.create({
  			title: 'Doctor information',
  			message: 'Enter the doctor information',
  			inputs:[

  				{
  					name: 'doctorName',
  					placeholder: "Name"
  				},
  				{
  					name: 'cedula',
  					placeholder: "License"
  				},
  				{
  					name: 'area',
  					placeholder: "Speciality"
  				}
  			],
  			buttons:[
  				{
  					text:"Cancel",
  					handler: data =>{
  						console.log("Cancel clicked");
  					}
  				},
  				{
  					text: "Save",
  					handler: data =>{
  						this.users.push({
  							name: data.doctorName,
  							cedula: data.cedula,
  							area: data.area
  						})
  					}
  				}
  			]

  		});

  		prompt.present();

  	}

}
