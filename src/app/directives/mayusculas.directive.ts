import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMayusculas]',
  providers: [{provide: NG_VALIDATORS, useExisting:  MayusculasDirective, multi:true}]
})
export class MayusculasDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let valido : boolean=false; // -->no hay errores
    let value : string= control.value;

    const letras_mayusculas : string[] = ["A","E","I","O","U"]
    length = value.length;

    while(length--) {
      if (letras_mayusculas.indexOf(value[length])!=-1) {
        valido = true;
      }
    }
    return valido?null:{'mayusculas':true}
  }
}
