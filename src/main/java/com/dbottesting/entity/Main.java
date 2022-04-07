package com.dbottesting.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="main", uniqueConstraints= {
@UniqueConstraint(columnNames="mainId")})
public class Main {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mainId", unique = true, nullable = false)
	private Long mainId;
	
	@Column(name = "firstName", nullable = false, length = 128)
	private String firstName;
	
	@Column(name = "lastName", nullable = false, length = 128)
	private String lastName;
	
	@Column(name = "email", nullable = false, length = 256)
	private String email;
	
	@Column(name = "spicyLv", nullable = false)
	private Long spicyLv;
	
	@OneToMany(mappedBy = "mainId")
	private List<SelectedCountry> main = new ArrayList<SelectedCountry>();
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "genderId", nullable = false)
	private Gender genderId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "age", nullable = false)
	private RangeAge age;

	public Long getMainId() {
		return mainId;
	}

	public void setMainId(Long mainId) {
		this.mainId = mainId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getSpicyLv() {
		return spicyLv;
	}

	public void setSpicyLv(Long spicyLv) {
		this.spicyLv = spicyLv;
	}

	public Gender getGenderId() {
		return genderId;
	}

	public void setGenderId(Gender genderId) {
		this.genderId = genderId;
	}

	public RangeAge getAge() {
		return age;
	}

	public void setAge(RangeAge age) {
		this.age = age;
	}

}
