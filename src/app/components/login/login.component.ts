import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datos:string="";
  miformlogin =new FormGroup({

    username:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z ]+$')
    ]),
    pass:new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9 ]+$')
    ])
  })
  submit():void{
    //solo llegarás aquí, si has podido clicar al boton
    this.datos=  `
    Username:             ${this.miformlogin.value.username}
    Password:         ${this.miformlogin.value.pass}
          `
        }
}
