import { Injectable } from '@angular/core';
import { Cooing } from './models/cooing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookingService {
public cookings : Cooing[];
public currentIndex = 0;
  constructor(public http : HttpClient) {
     let path = "../cooking.json"
      http.get(path).subscribe(deta =>{
        this.cookings = deta as Cooing[]
      })
   }
}
