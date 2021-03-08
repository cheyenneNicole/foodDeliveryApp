import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../restaurants';
import {Router} from "@angular/router";
import {Service} from '../api.service';

@Component({
  selector: 'app-american-food',
  templateUrl: './american-food.component.html',
  styleUrls: ['./american-food.component.css']
})
export class AmericanFoodComponent implements OnInit {
  title = 'Restaurants';
  restaurants: Restaurants[];
  constructor(private router: Router, private service: Service) { }

  getRestaurantsList(){
    let bigCities = [];
    this.service.getRestaurantsList().subscribe(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type == "American") {
        bigCities.push(data[i]);
      }
    }
      this.restaurants = bigCities;
      console.log(bigCities);
    });
  }
  getRestaurantById(){
      let bigCities = [];
      
  }
  callFunction(event, restaurant){
    this.service.getRestaurantById("60395a3583c6e60854596a95").subscribe(data => {
      console.log(data.meals);
      });
    console.log(restaurant.meals[0]);
  }
  ngOnInit(): void {
      this.getRestaurantsList();
  }
}