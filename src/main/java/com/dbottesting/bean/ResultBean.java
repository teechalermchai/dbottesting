package com.dbottesting.bean;

import java.util.List;

import com.dbottesting.entity.Main;
import com.dbottesting.entity.SelectedCountry;

public class ResultBean {
	
	public Main main;
	
	public List<SelectedCountry> selectedCountry;

	public Main getMain() {
		return main;
	}

	public void setMain(Main main) {
		this.main = main;
	}

	public List<SelectedCountry> getSelectedCountry() {
		return selectedCountry;
	}

	public void setSelectedCountry(List<SelectedCountry> selectedCountry) {
		this.selectedCountry = selectedCountry;
	}

}
