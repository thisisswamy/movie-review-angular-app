import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  

  matcher = new MyErrorStateMatcher();
  resetPassForm!:FormGroup;
  isPwdHide!:boolean;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.resetPassForm =this.fb.group({
      password:['',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPassword:['',[Validators.required]],
    })
  }
  submit(){
    if(this.resetPassForm.invalid){
      this.resetPassForm.markAllAsTouched()
      return;
    }
    console.log(this.resetPassForm.value);
    
  }


}
