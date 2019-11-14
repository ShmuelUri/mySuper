import { Component, OnInit } from '@angular/core';
import { ArrowService } from '../../../arrow.service';
import { BasketService } from '../../../basket.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  constructor(public arrowServ : ArrowService,public basketServ:BasketService) { }

  ngOnInit() {
  }

}
