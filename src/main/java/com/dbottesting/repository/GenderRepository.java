package com.dbottesting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbottesting.entity.Gender;

public interface GenderRepository extends JpaRepository<Gender,Long>{

	public List<Gender> findAll();
	
}
