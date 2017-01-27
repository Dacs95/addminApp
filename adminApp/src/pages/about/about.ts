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
  	// Agregar Doctores 
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
  							nombre: data.doctorName,
  							cedula: data.cedula,
  							area: data.area
  						})
  					}
  				}
  			]

  		});

  		prompt.present();

  	}
  	
 	//Editar los doctores
  	editDoctor(user): void{
  		let prompt = this.alertCtrl.create({
  			title: 'Doctor information',
  			message: 'Edit the doctor information',
  			inputs:[

  				{
  					name: 'doctorName',
  					placeholder: user.name
  				},
  				{
  					name: 'cedula',
  					placeholder: user.cedula
  				},
  				{
  					name: 'area',
  					placeholder: user.area
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
  						let newName:String = user.name;
  						let newCedula:String = user.cedula;
  						let newArea:String = user.area;

  						if(data.doctorName != ''){
  							newName = data.doctorName;
  						}
  						if(data.cedula != ''){
  							newCedula = data.cedula;
  						}
  						if(data.area != ''){
  							newArea = data.area;
  						}

  						this.users.update(user.$key,{
  							name: newName,
  							cedula: newCedula,
  							area: newArea
  						})
  					}
  				}
  			]

  		});

  		prompt.present();

  	}  	
  	//Eliminar Doctores 
  	deleteDoctor(user): void{
  		let prompt = this.alertCtrl.create({
  			title: 'Delete Doctor',
  			buttons:[
  				{
  					text:"Cancel",
  					handler: data =>{
  						console.log("Cancel clicked");
  					}
  				},
  				{
  					text: "Delete",
  					handler: data =>{
  						this.users.remove(user.$key);
  					}
  				}
  			]

  		});

  		prompt.present();

  	}

}
