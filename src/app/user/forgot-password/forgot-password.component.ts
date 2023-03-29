import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{

  matcher = new MyErrorStateMatcher();
  forgotPassForm!:FormGroup;
  isPwdHide!:boolean;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.forgotPassForm=this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  submit(){
    if(this.forgotPassForm.invalid){
      return;
    }
    console.log(this.forgotPassForm.value);
    
  }
}
