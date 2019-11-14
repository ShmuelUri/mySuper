import { Component, OnInit } from '@angular/core';
import { SnackService } from '../../../snack.service';

@Component({
  selector: 'app-snacks-card',
  templateUrl: './snacks-card.component.html',
  styleUrls: ['./snacks-card.component.css']
})
export class SnacksCardComponent implements OnInit {

  constructor(public snackServ : SnackService) { }

  ngOnInit() {
  }

}
