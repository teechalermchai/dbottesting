package com.dbottesting.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="selectedCountry", uniqueConstraints= {
@UniqueConstraint(columnNames="selectedCountryId")})
public class SelectedCountry {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "selectedCountryId", unique = true, nullable = false)
	private Long selectedCountryId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "mainId", nullable = false)
	private Main mainId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "countryId", nullable = false)
	private Country countryId;

	public Long getSelectedCountryId() {
		return selectedCountryId;
	}

	public void setSelectedCountryId(Long selectedCountryId) {
		this.selectedCountryId = selectedCountryId;
	}

	public Main getMainId() {
		return mainId;
	}

	public void setMainId(Main mainId) {
		this.mainId = mainId;
	}

	public Country getCountryId() {
		return countryId;
	}

	public void setCountryId(Country countryId) {
		this.countryId = countryId;
	}
	

}
