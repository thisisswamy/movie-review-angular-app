import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';
import { Router } from '@angular/router';
import { ApplicationState } from '../../store/state/application.state';
import { Store } from '@ngrx/store';
import { UserStatus } from '../../store/action/user-login.actions';

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

  constructor(private fb:FormBuilder,private router:Router,
    private store:Store<ApplicationState>){}

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
    console.log(window.btoa(this.loginForm.get('password')?.value));
    
    this.store.dispatch(new UserStatus({isUserLoggedIn:true}))
    this.router.navigate(['/home'])
    console.log(this.loginForm.value);
  }






}
