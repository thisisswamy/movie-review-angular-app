import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../common/services/Error-handler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  signUpForm!:FormGroup;
  isPwdHide!:boolean;
  constructor(private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPassword:['',[Validators.required]],
    });
  }
  submit(){
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched()
      return;
    }
    console.log(this.signUpForm.value);
    
  }

  

}
