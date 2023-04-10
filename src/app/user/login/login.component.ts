import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/services/Error-handler';
import { Router } from '@angular/router';
import { ApplicationState } from '../../store/state/application.state';
import { Store } from '@ngrx/store';
import { UserStatus } from '../../store/action/user-login.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiDetails } from 'src/environment/environment';
import { ApplicationHandlerService } from 'src/app/common/services/application-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  loginForm!: FormGroup;
  isPwdHide!: boolean;
  isInvalidCreds!: boolean;
  JWT_TOKEN!:string;
  isSubmitted!:boolean;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<ApplicationState>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['abcd@gmail.com', [Validators.required, Validators.email]],
      password: ['Swamy786@', [Validators.required]],
    });
  }

  submit() {
    this.isInvalidCreds = false;
    this.isSubmitted=true;
    if (this.loginForm.valid) {
      const body = {
        "email": this.loginForm.get('email')?.value,
        "password": this.loginForm.get('password')?.value,
      };
      this.getJWTToken(body);
    }
    this.loginForm.markAllAsTouched();
    return;
  }

  getJWTToken(body: any) {
    const endpoint:string = apiDetails.userMSHost() + apiDetails.user_ms_service_api.getJwtToken;
    console.log(endpoint);
    return new Promise<any>((resolve, reject) => {
      this.http.post(endpoint, body).subscribe(
        (res: any) => {
          ApplicationHandlerService.set("JWT_TOKEN",res?.token)
         this.getUserInfo(res.token);
          resolve(true);
        },

        (err) => {
          console.log(err);
          this.isSubmitted=false;
          this.isInvalidCreds=true;
        }
      );
    });
  }

  getUserInfo(token:any){
    const endpoint:string = apiDetails.userMSHost() + apiDetails.user_ms_service_api.validateByJWT;
    const header= new HttpHeaders({'Authorization': "Bearer "+token});
    return new Promise<any>((resolve, reject) => {
      this.http.get(endpoint,{headers:header}).subscribe(
        (res: any) => {
          apiDetails.JWT_TOKEN = "Bearer "+token;
          ApplicationHandlerService.set("userDetails",res);
          this.store.dispatch(new UserStatus({isUserLoggedIn:true}))
          this.router.navigate(['/home'])
          resolve(true);
        },
        (err) => {
          this.isSubmitted=false;
          console.log(err);
        }
      );
    });
  }


}
