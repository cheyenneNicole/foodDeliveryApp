import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Restaurants } from '../restaurants';
import {Router} from "@angular/router";
import {Service} from '../api.service';
import { Menus } from '../menus';


@Component({
  selector: 'app-american-food',
  templateUrl: './american-food.component.html',
  styleUrls: ['./american-food.component.css']
})
export class AmericanFoodComponent implements OnInit {
  title = 'Restaurants';
  restaurants: Restaurants[];
  menus : any [];
  meals: any [];

  constructor(private router: Router, private service: Service) { 
  }

  getRestaurantsList(){
    let bigCities = [];
    this.service.getRestaurantsList().subscribe(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type == "American") {
        bigCities.push(data[i]);
      }
    }
      this.restaurants = bigCities;
    });
  }
  
  callFunction(restaurant){
    console.log("Inside callFunction in AF")
    let food = [];
    this.service.getRestaurantById(restaurant.id).subscribe(data => {
      for(let k = 0; k < data.meals.length; k++){
        food.push(data.meals[k]);
      }
      console.log("inside subsribe in AF")
    });
    console.log("Setting menus in AF");
    this.menus = food;
    console.log("After setting menu in AF");
    this.service.setMenu(this.menus);
  }
  
  ngOnInit(){
    console.log("Inside ngonInit in AF");
    this.getRestaurantsList();
  }
}