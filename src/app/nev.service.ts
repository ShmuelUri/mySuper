import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NevService {
  public curentPanel = "drink"
  constructor() { }

  changePanel(panelName:string):void{
      this.curentPanel = panelName
  }
}
