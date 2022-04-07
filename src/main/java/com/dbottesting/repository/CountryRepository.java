package com.dbottesting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbottesting.entity.Country;

public interface CountryRepository extends JpaRepository<Country,Long>{
	
	public List<Country> findAll();

}
