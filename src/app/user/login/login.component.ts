import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  matcher = new MyErrorStateMatcher();
  loginForm!:FormGroup;
  isPwdHide!:boolean;
  isInvalidCreds!:boolean;
  errorMsg='Invalid Username/Password'

  constructor(private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  submit(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return;
    }
    this.router.navigate(['/movie-catalog'])
    console.log(this.loginForm.value);
  }






}
