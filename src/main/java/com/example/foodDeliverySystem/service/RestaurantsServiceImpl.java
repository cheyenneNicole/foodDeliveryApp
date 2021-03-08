package com.example.foodDeliverySystem.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodDeliverySystem.dao.RestaurantsDAO;
import com.example.foodDeliverySystem.entity.Restaurants;

@Service
public class RestaurantsServiceImpl implements RestaurantsService{

	@Autowired
	RestaurantsDAO dao;
	
	@Override
	public void createRestaurants(List<Restaurants> restaurants) {
		dao.saveAll(restaurants);
	}

	@Override
	public Collection<Restaurants> getAllRestaurants() {
		return dao.findAll();
	}

	@Override
	public Optional<Restaurants> findByType(String type) {
		return dao.findById(type);
	}

}
