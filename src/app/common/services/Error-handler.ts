import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

export function PasswordValidator(control:AbstractControl):{[key:string] :boolean} | null{
  const password =control.get('password');
  const confirmPassword=control.get('confirmPassword')

  if(password?.pristine || confirmPassword?.pristine){
    return null;
  }
  return password && confirmPassword && password?.value !== confirmPassword?.value ? {'misMatch':true} : null;
}

