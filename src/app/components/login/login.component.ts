import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { ValidaCredencialsService } from 'src/app/services/valida-credencials.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  /**
   * Service that validates credentials
   */
  constructor(private servicioUsers: ValidaCredencialsService, public router:Router) {
  }

   // ------------------- Form Login ---------------------// 
  datos!:string[];
   miformlogin = new FormGroup({
 
     username:new FormControl('',[
       Validators.required,
       Validators.minLength(6)
     ]),
     pass:new FormControl('',[
       Validators.required,
       Validators.minLength(8)
     ])
   })

  // ------------------------ Service ---------------------//
  
  // Prepared variable
  misUsers!: User[];
  validUser!: User;

  /**
   * The valid login function if the credentials are correct we get the User Object,
   * otherwise we have null.
   * If the user is not null, the cookie is created,
   * and the user is saved in localstorage.
   */
  login(): void{
  let loginUser = String(this.miformlogin.value.username);
  let loginPass = String(this.miformlogin.value.pass);

  this.servicioUsers.currentUsers.subscribe(
    arrayuser => this.misUsers=arrayuser
  )
  //this.misUsers = this.servicioUsers.arrayUser;
    /**
     * Valid Credentials
     * @return if the user exists it returns a User object with all the data
     * otherwise an empty User
     */
  this.validUser=this.servicioUsers.validCredentials(this.misUsers, loginUser, loginPass)
  console.log(this.validUser)
    if (this.validUser != null){
      // Create cookie
      this.servicioUsers.setCookie('username',this.validUser.username)
      this.servicioUsers.setCookie('role',this.validUser.role)
      
      // Create localstorage User
      this.servicioUsers.setLocalstorage(this.validUser);
      // Create localstorage. Username
      //localStorage.setItem("username", JSON.stringify(this.validUser.username));

    }
  }


  // ---------------------- Redirects -----------------------//
  /**
   * successfulLogin function redirects to '/compo1'
   */
  successfulLogin(): void{
    this.router.navigateByUrl('/events')
  }
  successfulLogin2(): void{
    this.router.navigateByUrl('/events')
  }

  // ---------------------- Button -----------------------//
  /**
   * The submit function calls the login function.
   * if validUser is not null, call the successfulLogin function to send to another page.
   * If validUser is null, the data is displayed, with Wrong User and the data entered.
   */
  response!:string;
  submit():void{
    
    this.login();
    if (this.validUser != null){
      
      if (this.validUser.role == "buyer"){
        this.successfulLogin();
      }else if(this.validUser.role == "administrator"){
        this.successfulLogin2();
      }
    }else{
    this.response = "Incorrect Credentials"
      this.datos= [`Datos ingresados ->`,
      `Username:         ${this.miformlogin.value.username}`,
      `Password:         ${this.miformlogin.value.pass}`];
        }
  }


} // end
