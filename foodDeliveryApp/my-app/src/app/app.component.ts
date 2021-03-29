import { Component } from '@angular/core';
import {AmericanFoodComponent} from './american-food/american-food.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  currentMsgFromChild1ToChild2 : any;
  fwdMsgToSib2($event) { this.currentMsgFromChild1ToChild2 = $event; }
  
}

