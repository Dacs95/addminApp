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
  							agenda: {
  								caso: false,
  								evento: false,
  								histMed: false,
  								postop: false,
  								preparacion: false,
  								valoracion: false
  							},
  							datos:{
  							nombre: data.pacientName,
  							origen: data.city,
  							dob: data.dob,
  							evento: data.evento,
  							psw: ""
  							}  							
  						})
  					}
  				}	
  				
  			]
  		});
  		prompt.present();
  	}

  	editPatient(user){
  		  		let prompt = this.alertCtrl.create({
  			title: 'Pacient info',
  			message: 'Edit the pacient information',
  			inputs:[
  				{
  					name: 'pacientName',
  					placeholder: user.datos.nombre
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
  							agenda: {
  								caso: false,
  								evento: false,
  								histMed: false,
  								postop: false,
  								preparacion: false,
  								valoracion: false
  							},
  							datos:{
  							nombre: data.pacientName,
  							origen: data.city,
  							dob: data.dob,
  							evento: data.evento,
  							psw: ""
  							}  							
  						})
  					}
  				}	
  				
  			]
  		});
  		prompt.present();
  	}

  	deletePatient(user){


  	}

}
