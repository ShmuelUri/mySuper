import { Component, OnInit } from '@angular/core';
import { CookingService } from '../../../cooking.service';

@Component({
  selector: 'app-cooking-panel',
  templateUrl: './cooking-panel.component.html',
  styleUrls: ['./cooking-panel.component.css']
})
export class CookingPanelComponent implements OnInit {

  constructor(public cookingServ : CookingService) { }

  ngOnInit() {
  }

}
