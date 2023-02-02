import { Component } from '@angular/core';
import { Events } from 'src/app/models/Events';
import { User } from 'src/app/models/User';
import { ValidaCredencialsService } from 'src/app/services/valida-credencials.service';


@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {

  constructor(private servicioUsers: ValidaCredencialsService){
  }

  user!: string;
  localUser!:User;
  role!: string;

  getUsernameAndRole(){
  // Get Username of cookie
  this.user = String(this.servicioUsers.getCookie("username"));

  // Get Role of localstorage.
  this.localUser = this.servicioUsers.getLocalstorage("usuario")
  this.role = this.localUser.role;
  }
  
  /**
   * Verify if you are logged in or not to manage the navbar options
   * @returns true if "username" exists in localstorage else false.
   */
  loggedIn() {
    return localStorage.getItem("usuario") ? true : false;
  }

  
}
