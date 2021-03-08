package com.example.foodDeliverySystem.controller;


import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodDeliverySystem.dao.RestaurantsDAO;
import com.example.foodDeliverySystem.entity.Meals;
import com.example.foodDeliverySystem.entity.Restaurants;
import com.example.foodDeliverySystem.service.RestaurantsService;

@RestController
@RequestMapping("/api")
public class RestaurantsController {

	@Autowired
	RestaurantsService service;
	
//	@Autowired
//	RestaurantsDAO dao;

	@PostMapping(value= "/addRestaurants")
	public String create(@RequestBody List<Restaurants> rests) {
		service.createRestaurants(rests);
		return "Restaurants created";
	}
	
	@GetMapping(value= "/getall")
	public Collection<Restaurants> getAll() {
		return service.getAllRestaurants();
	}
	
	@GetMapping("/restaurants/{type}")
    public Optional <Restaurants> getRestaurantsByType(@PathVariable String type)
    {
		Optional<Restaurants> restaurant = service.findByType(type);
		return restaurant;
    }
}

//	@GetMapping("/restaurants/{id}")
//	public ResponseEntity<List<Meals>> findMealsByRestId(@PathVariable String id) {
//			Optional<Restaurants> restaurant = service.findByType(id);
//			return restaurant
//			Meals[] meals = restaurant.;
//		    if (meals.isEmpty()) {
//		      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		    }
//		    return new ResponseEntity<>(meals, HttpStatus.OK);
//		  } 
//	}
	
