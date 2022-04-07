package com.dbottesting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbottesting.entity.RangeAge;

public interface RangeAgeRepository extends JpaRepository<RangeAge,Long>{
	
	public List<RangeAge> findAll();

}
