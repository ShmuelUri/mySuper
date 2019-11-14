import { Component } from '@angular/core';
import { NevService } from './nev.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mySuper';
  constructor(public navServ : NevService){

  }
}
