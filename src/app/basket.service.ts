import { Injectable } from '@angular/core';
import { NevService } from './nev.service';
import { DrinkService } from './drink.service';
import { SnackService } from './snack.service';
import { CookingService } from './cooking.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
public items : {}[] = [];
  constructor(public navServ : NevService,public drinkServ : DrinkService,public snackServ:SnackService,
     public cookingServ : CookingService ) { }

      addItem(){
        let currentPanel = this.navServ.curentPanel
    switch (currentPanel) {
      case "drink":
           this.items.push(this.drinkServ.drinks[this.drinkServ.currentIndex])
        break;
      case "cooking":
            this.items.push(this.cookingServ.cookings[this.cookingServ.currentIndex])
          break;
      case "snack":
             this.items.push(this.snackServ.snacks[this.snackServ.currentIndex])
            break;
      default:
        break;
    }
  }
      }

