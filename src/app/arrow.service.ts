import { Injectable, EventEmitter } from '@angular/core';
import { NevService } from './nev.service';
import { DrinkService } from './drink.service';
import { CookingService } from './cooking.service';
import { SnackService } from './snack.service';


@Injectable({
  providedIn: 'root'
})
export class ArrowService {
// public arrowEvent = new EventEmitter()
   
  constructor(public nuvServ:NevService,public drinkServ : DrinkService, public cookingServ : CookingService, public snackServ : SnackService) { }
  // emitEvent(delta){
  //    this.arrowEvent.emit(delta)
  // }
  moveItem(delte:number){
   let currentPanel = this.nuvServ.curentPanel
    switch (currentPanel) {
      case "drink":
            this.drinkServ.currentIndex = this.calcIndex(this.drinkServ.currentIndex,delte,this.drinkServ.drinks.length);
        break;
      case "cooking":
            this.cookingServ.currentIndex = this.calcIndex(this.cookingServ.currentIndex ,delte,this.cookingServ.cookings.length);
          break;
      case "snack":
            this.snackServ.currentIndex = this.calcIndex(this.snackServ.currentIndex,delte,this.snackServ.snacks.length)
            break;
      default:
        break;
    }
  }
  calcIndex(currentIndex:number,delta:number,length:number):number{
        let x = (currentIndex + delta)  %  length;
        if(x > -1){
          return x;
        }else{ return length-1}
  }
}

