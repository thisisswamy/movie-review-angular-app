import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';
import { PasswordValidator } from '../../common/services/Error-handler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  signUpForm!:FormGroup;
  hide!:boolean;
  constructor(private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern('')]],
      confirmPassword:['',[Validators.required]],
    },{validator:PasswordValidator})
  }
  

}
