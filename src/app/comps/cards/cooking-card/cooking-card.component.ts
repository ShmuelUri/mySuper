import { Component, OnInit } from '@angular/core';
import { CookingService } from '../../../cooking.service';

@Component({
  selector: 'app-cooking-card',
  templateUrl: './cooking-card.component.html',
  styleUrls: ['./cooking-card.component.css']
})
export class CookingCardComponent implements OnInit {

  constructor(public cookingServ : CookingService) { }

  ngOnInit() {
  }

}
