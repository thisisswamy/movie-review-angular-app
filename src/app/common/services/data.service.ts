import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    menuOpenClose =new BehaviorSubject<boolean>(false)

  constructor() { }
}
