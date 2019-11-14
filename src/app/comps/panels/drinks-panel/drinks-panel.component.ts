import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../../drink.service';

@Component({
  selector: 'app-drinks-panel',
  templateUrl: './drinks-panel.component.html',
  styleUrls: ['./drinks-panel.component.css']
})
export class DrinksPanelComponent implements OnInit {

  constructor( public drinkServ : DrinkService) { }

  ngOnInit() {
  }

}
