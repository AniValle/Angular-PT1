import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  datos:string="";
  miform =new FormGroup({

    nombre:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[a-zA-Z ]+$')
    ]),
    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9 ]+$')
    ]),
    confir_contraseña: new FormControl('',[
      Validators.required
      // se ha de validar que coincida con la anterior.
    ]),
    correo:new FormControl('',[
      Validators.required,
      //Validators.email
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]),
    civil: new FormControl('',[
      Validators.required
    ]),
    sexo: new FormControl('',[
      Validators.required
    ]),
    aceptar: new FormControl('',[
      Validators.requiredTrue
    ]),
    info: new FormControl('',[]),

//mas campos

  })

  civil: string[] = ["Casat/da","Solter/a","Divorciat/da"];
  informacion: string[] = ["Videojocs", "Accesoris", "Novetats del mercat"];

  submit():void{
    //solo llegarás aquí, si has podido clicar al boton
    this.datos=  `
    Nombre:             ${this.miform.value.nombre}
    Correo:             ${this.miform.value.correo}
    Contraseña:         ${this.miform.value.pass}
    Confir_contraseña:  ${this.miform.value.confir_contraseña}
    Civil:              ${this.miform.value.civil}
    Sexo:               ${this.miform.value.sexo}
    Aceptar:            ${this.miform.value.aceptar}
    Info:               ${this.miform.value.info}
          `
        }
}
