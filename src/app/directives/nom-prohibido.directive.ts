import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appNomProhibido]',
  providers: [{provide: NG_VALIDATORS, useExisting:  NomProhibidoDirective, multi:true}]
})
export class NomProhibidoDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let valido : boolean=false; // --> hay errores
    const prohibido_list: string[] = ["pamplinas","estupido","maldicion","carapapa","tarugo"];
    let value : string = control.value;

    if((prohibido_list.includes(value))){
      valido =false;
    }else{
      valido =true;
    }
    return valido?null:{'validate':true}
  }
}
