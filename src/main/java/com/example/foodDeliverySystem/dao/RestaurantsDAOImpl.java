package com.example.foodDeliverySystem.dao;
//package com.example.dao;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Example;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.mongodb.core.MongoTemplate;
//import org.springframework.stereotype.Repository;
//
//import com.example.entity.Restaurants;
//
//@Repository
//public abstract class RestaurantsDAOImpl implements RestaurantsDAO {
//	@Autowired
//	private MongoTemplate mongoTemplate;
//
//
//	@Override
//	public List<Restaurants> findAll() {
//		System.out.println("INSIDE FINDALL");
//		return mongoTemplate.findAll(Restaurants.class);
//	}
//
//
//}
