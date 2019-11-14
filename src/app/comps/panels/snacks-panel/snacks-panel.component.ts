import { Component, OnInit } from '@angular/core';
import { SnackService } from '../../../snack.service';

@Component({
  selector: 'app-snacks-panel',
  templateUrl: './snacks-panel.component.html',
  styleUrls: ['./snacks-panel.component.css']
})
export class SnacksPanelComponent implements OnInit {

  constructor(public snackServ : SnackService) { }

  ngOnInit() {
  }

}
