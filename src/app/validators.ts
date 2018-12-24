import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export class Validators {


  static username(control: AbstractControl): ValidationErrors | null {

    if (control.value && control.value.length === 10) {

      return this.minLength(7);
    }

    return {error: 'length not 10'} ;
  }

    static minLength(len: number): ValidatorFn {

    const minValidator = (control: AbstractControl) => {

      if (control.value && control.value.length >= 10) {

        return null;
      }
      return {error: 'length should n'} ;

    };
        return minValidator;
    }
}
