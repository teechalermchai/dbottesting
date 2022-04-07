package com.dbottesting.bean;

import java.util.List;

import com.dbottesting.entity.Country;
import com.dbottesting.entity.Main;

public class FormatBean {
	
	public Main main;
	
	public List<Country> country;

	public Main getMain() {
		return main;
	}

	public void setMain(Main main) {
		this.main = main;
	}

	public List<Country> getCountry() {
		return country;
	}

	public void setCountry(List<Country> country) {
		this.country = country;
	}

	

}
