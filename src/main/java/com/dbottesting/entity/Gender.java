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
@Table(name="gender", uniqueConstraints= {
@UniqueConstraint(columnNames="genderId")})
public class Gender {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "genderId", unique = true, nullable = false)
	private Long genderId;
	
	@Column(name = "genderDesc", nullable = false, length = 128)
	private String genderDesc;
	
	@OneToMany(mappedBy = "genderId")
	private List<Main> genderMain = new ArrayList<Main>();

	public Long getGenderId() {
		return genderId;
	}

	public void setGenderId(Long genderId) {
		this.genderId = genderId;
	}

	public String getGenderDesc() {
		return genderDesc;
	}

	public void setGenderDesc(String genderDesc) {
		this.genderDesc = genderDesc;
	}

}
