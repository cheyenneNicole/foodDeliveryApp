import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class Service {  
  
  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getRestaurantsList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getall');  
  }  
  getRestaurantById(id: string): Observable<any> {  
    return this.http.get(`${this.baseUrl}/restaurants/${id}`);
  }

}
