import { Component, OnInit } from '@angular/core';
import { Service } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  meals : any [];

  constructor(private service: Service) {
    
  }
  getMenu(){
    let food = [];
    this.service.americanFoodComponent$.subscribe((menu) => {
      // menu is a array of objects
      food.push(menu);
      this.meals = food;
    });
    console.log(this.meals);
    this.meals = food;
  }
  
  // ngOnChanges(){
  //   console.log("Where am i printing");
  // }
  ngOnInit() {
    console.log("inside ngonit in MenuFood")
    this.getMenu();
    // this.question = this.childMessage;
    //this.getMenu();
  }
  
}

