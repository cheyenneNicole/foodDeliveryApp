package com.example.foodDeliverySystem.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//@Document(collection = "meals")
public class Meals {

//	@Id
//	private int id;
//	private int restId;
	private String name;
	private int price;
	
	
	public Meals(String name, int price) {
		this.name = name;
		this.price = price;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Food name=" + name + ", price=" + price + "]";
	}
	
	
}
