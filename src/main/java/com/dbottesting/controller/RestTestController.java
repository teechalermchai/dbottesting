package com.dbottesting.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbottesting.bean.FormatBean;
import com.dbottesting.bean.ResultBean;
import com.dbottesting.entity.Country;
import com.dbottesting.entity.Gender;
import com.dbottesting.entity.Main;
import com.dbottesting.entity.RangeAge;
import com.dbottesting.entity.SelectedCountry;
import com.dbottesting.repository.CountryRepository;
import com.dbottesting.repository.GenderRepository;
import com.dbottesting.repository.MainRepository;
import com.dbottesting.repository.RangeAgeRepository;
import com.dbottesting.repository.SelectedCountryRepository;

@RestController
@RequestMapping("/rest")
public class RestTestController {
	
	@Autowired
	GenderRepository genderRepository;
	@Autowired
	RangeAgeRepository rangeAgeRepository;
	@Autowired
	CountryRepository countryRepository;
	@Autowired
	MainRepository mainRepository;
	@Autowired
	SelectedCountryRepository selectedCountryRepository;
	
	@GetMapping("/genderList")
	public List<Gender> getGender() {
		
		List<Gender> genderList = new ArrayList<Gender>();
		genderList = genderRepository.findAll();

	    return genderList;
	
	}
	
	@GetMapping("/rangeAgeList")
	public List<RangeAge> getRangeAge() {
		
		List<RangeAge> rangeAgeList = new ArrayList<RangeAge>();
		rangeAgeList = rangeAgeRepository.findAll();

	    return rangeAgeList;
	}
	
	@GetMapping("/countryList")
	public List<Country> getCountry() {
		
		List<Country> countryList = new ArrayList<Country>();
		countryList = countryRepository.findAll();

	    return countryList;
	}
	
//	@GetMapping("/getData")
//	public ResultBean getData() {
//		Main input = new Main();
//		Main main = new Main();
//		List<SelectedCountry> selectedCountryList = new ArrayList<SelectedCountry>();
//		ResultBean result = new ResultBean();
//		input.setMainId(4L);
//		main = mainRepository.findMain(input.getMainId());
//		selectedCountryList = selectedCountryRepository.findList(input);
//		for(int i =0;i<selectedCountryList.size();i++) {
//			selectedCountryList.get(i).setMainId(null);
//		}
//		result.setMain(main);
//		result.setSelectedCountry(selectedCountryList);
//		
//		return result;
//	}
	
	@PostMapping("/getData")
	public ResultBean getData(@RequestBody Long mainId) {
		Main input = new Main();
		Main main = new Main();
		List<SelectedCountry> selectedCountryList = new ArrayList<SelectedCountry>();
		ResultBean result = new ResultBean();
		input.setMainId(mainId);
		main = mainRepository.findMain(input.getMainId());
		selectedCountryList = selectedCountryRepository.findList(input);
		for(int i =0;i<selectedCountryList.size();i++) {
			selectedCountryList.get(i).setMainId(null);
		}
		result.setMain(main);
		result.setSelectedCountry(selectedCountryList);
		
		return result;
	}
	
	@PostMapping("/save")
	public ResultBean saveForm(@RequestBody FormatBean input) {
		Main main = new Main();
		Main mainResult = new Main();
		Gender genderId = new Gender();
		RangeAge age = new RangeAge();
		List<SelectedCountry> selectedCountryList = new ArrayList<SelectedCountry>();
		List<SelectedCountry> selectedCountryListResult = new ArrayList<SelectedCountry>();
		ResultBean resultBean = new ResultBean();
		age.setRangeAgeId(input.getMain().getAge().getRangeAgeId());
		genderId.setGenderId(input.getMain().getGenderId().getGenderId());
		main.setFirstName(input.getMain().getFirstName());
		main.setLastName(input.getMain().getLastName());
		main.setEmail(input.getMain().getEmail());
		main.setGenderId(genderId);
		main.setAge(age);
		main.setSpicyLv(input.getMain().getSpicyLv());
		
		mainResult = mainRepository.save(main);
		
		for (int i=0; i<input.getCountry().size();i++) {
			SelectedCountry selectedCountry = new SelectedCountry();
			selectedCountry.setMainId(mainResult);
			selectedCountry.setCountryId(input.getCountry().get(i));
			selectedCountryList.add(selectedCountry);
		}
		selectedCountryListResult = selectedCountryRepository.saveAll(selectedCountryList);
		resultBean.setMain(mainResult);
		resultBean.setSelectedCountry(selectedCountryListResult);
		
		return resultBean;
	}

}
