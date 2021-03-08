package com.example.foodDeliverySystem.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.foodDeliverySystem.entity.Meals;
import com.example.foodDeliverySystem.entity.Restaurants;

@Repository
public interface RestaurantsDAO extends MongoRepository<Restaurants, String> {

	//return meals of restaurants
	
//	List<Restaurants> findMeals(String id);
	
}