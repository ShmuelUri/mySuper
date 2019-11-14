import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../basket.service';

@Component({
  selector: 'app-basket-panel',
  templateUrl: './basket-panel.component.html',
  styleUrls: ['./basket-panel.component.css']
})
export class BasketPanelComponent implements OnInit {

  constructor(public basketServ : BasketService) { }

  ngOnInit() {
  }

}
