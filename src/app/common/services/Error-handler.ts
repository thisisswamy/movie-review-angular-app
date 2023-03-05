import { AbstractControl, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

export function PasswordValidator(control:AbstractControl):{[key:string] :boolean}{
  const password =control.get('password');
  const confirmPassword=control.get('confirmPassword')

  if(password?.pristine || confirmPassword?.pristine){
    return {'misMatch':false};
  }
  console.log(password?.value !== confirmPassword?.value);
  
  return password && confirmPassword && password?.value !== confirmPassword?.value ? {'misMatch':true} : {'miMatch':false};
}