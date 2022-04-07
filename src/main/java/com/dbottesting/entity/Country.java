package com.dbottesting.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="country", uniqueConstraints= {
@UniqueConstraint(columnNames="countryId")})
public class Country {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "countryId", unique = true, nullable = false)
	private Long countryId;
	
	@Column(name = "continent", nullable = false, length = 128)
	private String continent;
	
	@Column(name = "countryName", nullable = false, length = 128)
	private String countryName;
	
	@OneToMany(mappedBy = "countryId")
	private List<SelectedCountry> countrySelectedCountry = new ArrayList<SelectedCountry>();
	
	public Long getCountryId() {
		return countryId;
	}

	public void setCountryId(Long countryId) {
		this.countryId = countryId;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getContinent() {
		return continent;
	}

	public void setContinent(String continent) {
		this.continent = continent;
	}
	

}
