import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNotNumeros]',
  providers: [{provide: NG_VALIDATORS, useExisting:  NotNumerosDirective, multi:true}]
})
export class NotNumerosDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let valido : boolean=false; // -->no hay errores
    let value : string= control.value;

    var pattern = /^[0-9]/g;
    if (!pattern.test(value)){
      valido = true
    }
    return valido?null:{'numeros':true}
  }

}
