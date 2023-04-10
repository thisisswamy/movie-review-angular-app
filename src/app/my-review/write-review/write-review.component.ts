import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationHandlerService } from 'src/app/common/services/application-handler.service';
import { apiDetails } from 'src/environment/environment';
import { endPoints } from '../../../../../g-mail-clone-app/src/app/End points/endpoints';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
})
export class WriteReviewComponent implements OnInit {
  reviewForm!: FormGroup;
  userInfo: any;
  isWritten!: boolean;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userInfo = ApplicationHandlerService.get('userDetails');
    this.reviewForm = this.fb.group({
      name: ['RRR', [Validators.required]],
      lang: ['Telugu', [Validators.required]],
      castCrew: ['RAJAMOULI,RAMCHARAN,TARAK', [Validators.required]],
      rating: ['6', [Validators.required]],
      verdict: ['BLOCK BUSTER', [Validators.required]],
      // poster:['',[Validators.required]],
    });
  }
  submit() {
    this.isWritten = false;
    if (this.reviewForm.invalid) {
      this.reviewForm.markAllAsTouched();
      return;
    }
    const endpoint: string =
      apiDetails.reviewMSHost() + apiDetails.review_ms_service_apis.writeReview;
    const body = {
      userName: this.userInfo.userName,
      movieName: this.reviewForm.get('name')?.value,
      rating: this.reviewForm.get('rating')?.value,
      verdict: this.reviewForm.get('verdict')?.value,
      castCrew: this.reviewForm.get('castCrew')?.value.split(','),
      language: this.reviewForm.get('lang')?.value,
      key: this.reviewForm.get('name')?.value+new Date().valueOf(),
    };
    const header = new HttpHeaders({
      "Authorization": apiDetails.JWT_TOKEN,
      "Content-Type":"application/json"
    });
    console.log(endpoint, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      this.http
        .post(endpoint, JSON.stringify(body), { headers:header ,responseType: 'text' })
        .subscribe(
          (res) => {
            if(res.includes("ALready")){
              this.isWritten=true;
            }else{

              this.router.navigate(['/my-reviews']);
            }
          },
          (err) => {
            this.isWritten = true;
            console.log(err);
          }
        );
    });
    console.log(body);
  }
}
