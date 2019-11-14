import { Component, OnInit } from '@angular/core';
import { NevService } from '../../../nev.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public navService: NevService) { }

  ngOnInit() {
  }

}
