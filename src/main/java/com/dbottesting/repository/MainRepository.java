package com.dbottesting.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dbottesting.entity.Main;

public interface MainRepository extends JpaRepository<Main,Long>{
	
	@Query("FROM Main WHERE mainId=:mainId")
	Main findMain(@Param("mainId")Long mainId);
	
}
