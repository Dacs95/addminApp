import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {EditPage} from '../edit/edit';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
	users: FirebaseListObservable<any>;

  	constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
  		this.users = angFire.database.list('/users');

		//const users$ : FirebaseListObservable<any> = angFire.database.list('/users/RCaaNtxzs7QVlwPsASrXFYSelCD2');
		//users$.subscribe(console.log);
	
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
  								caso:{
									  mensaje:"",
									  status:"false"
								  },
  								evento: {
									  doctor:"",
									  cirugia:""
								  },
								  historial: {
									  status: "false"
								  },
								  postop: {
									  receta:"",
									  recomendaciones: ""
								  },
								  preparacion: {
									  fechaOficial:"",
									  recomendaciones:""
								  },
  								validacion:{
									  admitido:"No",
									  observaciones:"",
									  status:"false"
								  }
  							},
  							datos:{
  							nombre: data.pacientName,
  							origen: data.city,
  							dob: data.dob,
  							evento: data.evento,
  							psw: "",
							email:""
  							}  							
  						})
  					}
  				}	
  				
  			]
  		});
  		prompt.present();
  	}

	nextPageEdit(user){
		this.navCtrl.push(EditPage);
	}


  	deletePatient(user){
  		let prompt = this.alertCtrl.create({
  			title: 'Delete Patient',
  			buttons:[
  				{
  					text:"Cancel",
  					handler: data => {
  						console.log("Cancel clicked");
  					}	
  				},
  				{
  					text:"Delete Patient",
  					handler: data => {
  						this.users.remove(user.$key);
  					}
  				}
  			]

  		});
  		prompt.present();

  	}

	searchUser(){
		let prompt = this.alertCtrl.create({
			title:'Search',
			message:'Search by Name or Speciality',
			inputs:[
				{
					name:'nombre',
					placeholder: "Name"
				},
				{
					name:'area',
					placeholder: "Speciality"
				}

			],
			buttons:[
				{
  					text:"Cancel",
  					handler: data => {
  						console.log("Cancel clicked");
  					}	
  				},
  				{
  					text:"Search",
  					handler:data =>{
						this.users.subscribe(console.log); 				  

  					}
  				}

			]

  		});
		  prompt.present();
	}

}
