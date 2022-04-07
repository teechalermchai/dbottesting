package com.dbottesting.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dbottesting.entity.Main;
import com.dbottesting.entity.SelectedCountry;

public interface SelectedCountryRepository extends JpaRepository<SelectedCountry,Long>{
	
	@Query("FROM SelectedCountry WHERE mainId=:mainId")
	List<SelectedCountry> findList(@Param("mainId")Main mainId);

}
