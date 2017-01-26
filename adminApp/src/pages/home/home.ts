import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
	users: FirebaseListObservable<any>;

  	constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
  		this.users = angFire.database.list('/users');
	
  	}

  	addUser(): void{
  		let prompt = this.alertCtrl.create({
  			title: 'Pacient info',
  			message: 'Enter the pacient information',
  			inputs:[
  				{
  					name: 'pacientName',
  					placeholder: "Pacient Name"
  				},
  				{
  					name: 'city',
  					placeholder: "City"
  				},
  				{
  					name: 'dob',
  					placeholder: "DD/MM/YY"
  				},
  				{
  					name: 'evento',
  					placeholder: "Medical Procedure"
  				}
  			],
  			buttons: [
  				{
  					text:"Cancel",
  					handler: data => {
  						console.log("Cancel clicked");
  					}
  				},
  				{
  					text:"Save",
  					handler: data =>{
  						this.users.push({
  							nombre: data.pacientName,
  							origen: data.city,
  							dob: data.dob,
  							evento: data.evento
  						})
  					}
  				}	
  				
  			]
  		});
  		prompt.present();
  	}

}
