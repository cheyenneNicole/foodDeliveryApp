package com.example.foodDeliverySystem.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.example.foodDeliverySystem.entity.Restaurants;

public interface RestaurantsService {

	public void createRestaurants(List<Restaurants> rests);

	public Collection<Restaurants> getAllRestaurants();

	public Optional<Restaurants> findByType(String type);
	
}
