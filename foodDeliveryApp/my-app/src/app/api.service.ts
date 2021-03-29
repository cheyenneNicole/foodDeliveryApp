import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class Service {  
  
  private baseUrl = 'http://localhost:8080/api/';  
  food : any [];
  private americanFoodComponent = new Subject<any>();
  americanFoodComponent$ = this.americanFoodComponent.asObservable();

  constructor(private http:HttpClient) {}  
  
  getRestaurantsList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getall');  
  }  
  getRestaurantById(id: string): Observable<any> {  
    return this.http.get(`${this.baseUrl}/restaurants/${id}`);
  }
  getMenu(){  
    console.log(this.food + "GETMENU");
    return this.food;
  }
  setMenu(menu: any []){  
    this.food = menu;
    console.log(this.food);
    this.americanFoodComponent.next(this.food);
  }
  
}
