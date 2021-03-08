package com.example.foodDeliverySystem.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@Document(collection = "restaurants")
public class Restaurants {

	@Id
    private String id;
    private String name;
    private String type;
    private String location;
    private Meals[] meals;
    //private List<Meals> foods;
    
    public Restaurants() {

    }

	
	public Restaurants(String name, String type, String location, Meals[] meals) {
		this.name = name;
		this.type = type;
		this.location = location;
		this.meals = meals;
	}

	
	public Meals[] getMeals() {
		return meals;
	}


	public void setMeals(Meals[] meals) {
		this.meals = meals;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	@Override
    public String toString() {
    	ObjectMapper mapper = new ObjectMapper();
    	
    	String jsonString = "";
		try {
			mapper.enable(SerializationFeature.INDENT_OUTPUT);
			jsonString = mapper.writeValueAsString(this);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
    	return jsonString;
    }
    
    

}
