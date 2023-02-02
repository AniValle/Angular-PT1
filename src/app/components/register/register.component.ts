/**
 * Register.component This script is in charge of the
 * functions for registering users to the application.
 * @author Ani Valle
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ValidaCredencialsService } from 'src/app/services/valida-credencials.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  /**
   * Service that validates credentials
   */
  constructor(private servicioUsers: ValidaCredencialsService) {
  }

  // Prepared Variables
  statuses: string[] = this.servicioUsers.statuses;
  genders: string[] = this.servicioUsers.genders;
  informations: string[] = this.servicioUsers.informacions;
  // Global variables for the registeruser function
  misUsers!: User[];
  newUser!:User;
  // Global variables for the submit function
  datos!:string[];

  // Validation of the registration form
  miform = new FormGroup({

    username:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z1-9 ]+$')
    ]),
    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9 ]+$')
    ]),
    confirm_pass: new FormControl('',[
      Validators.required
      // se ha de validar que coincida con la anterior.
    ]),
    email:new FormControl('',[
      Validators.required,
      //Validators.email
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]),
    civilStatus: new FormControl('',[
      Validators.required
    ]),
    gender: new FormControl('',[
      Validators.required
    ]),
    info: new FormControl('',[

    ]),
    acceptConditions: new FormControl('',[
      Validators.requiredTrue
    ])
  })

  
  /**
   * registers a new user and reports the changes to the other components.
   */
  registerUser(){

    this.servicioUsers.currentUsers.subscribe(
      arrayuser => this.misUsers=arrayuser
    )
    // Nuevo usuario
    this.newUser = new User(
      String(this.miform.value.username),
      String(this.miform.value.pass),
      "buyer",
      String(this.miform.value.email),
      String(this.miform.value.civilStatus),
      String(this.miform.value.gender),
      String(this.miform.value.info),
      Boolean(this.miform.value.acceptConditions) 
    )
    this.misUsers.push(this.newUser);

    this.servicioUsers.changeArrayUser(this.misUsers)
    console.log(this.misUsers)
  }

  /**
   * The submit function calls the registerUser function,
   * displays a message if the user registered successfully
   * and the data of the new user.
   */
  response!:string;
  submit():void{
    this.registerUser();
    this.response = "User successfully registered"
    this.datos =
    [`Username:            ${this.newUser.username}`,
    `Password:             ${this.newUser.password}`,
    `Email:                ${this.newUser.email}`,
    `Civil Status:         ${this.newUser.status}`,
    `Gender:               ${this.newUser.gender}`,
    `Information:          ${this.newUser.info}`,
    `Accept Condicions:    ${this.newUser.accepted}`];
        }
}
