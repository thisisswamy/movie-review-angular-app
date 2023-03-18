import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  reviewForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.reviewForm =this.fb.group({
      name:['',[Validators.required]],
      lang:['',[Validators.required]],
      castCrew:['',[Validators.required]],
      rating:['',[Validators.required]],
      verdict:['',[Validators.required]],
      poster:['',[Validators.required]],
    })
   
  }
  submit(){
    if(this.reviewForm.invalid){
      this.reviewForm.markAllAsTouched()
      return;
    }
    console.log(this.reviewForm.value);
    
  }

}
