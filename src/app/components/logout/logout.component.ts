import { Component } from '@angular/core';
import { ValidaCredencialsService } from 'src/app/services/valida-credencials.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private servicioUsers: ValidaCredencialsService){
  }

  u = String(this.servicioUsers.getCookie("username"));
  r = String(this.servicioUsers.getCookie("role"));
  mensaje!:string;

  msjLogout():string{
    if (this.u && this.r ){
      this.mensaje = "Are you sure you want to log out?";
    }else{
      this.mensaje = "You are not logged in";
    }
    return this.mensaje;
  }

  logout(){
    if (this.u && this.r ){
      this.servicioUsers.deleteCookie('username');
      this.servicioUsers.deleteCookie('role');
      this.servicioUsers.removeLocalStorage('usuario');
    }
  }


} // end
