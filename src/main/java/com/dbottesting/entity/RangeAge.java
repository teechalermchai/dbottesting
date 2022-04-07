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
@Table(name="rangeAge", uniqueConstraints= {
@UniqueConstraint(columnNames="rangeAgeId")})
public class RangeAge {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rangeAgeId", unique = true, nullable = false)
	private Long rangeAgeId;
	
	@Column(name = "rangeDesc", nullable = false)
	private String rangeDesc;
	
	@OneToMany(mappedBy = "age")
	private List<Main> ageMain = new ArrayList<Main>();	

	public Long getRangeAgeId() {
		return rangeAgeId;
	}

	public void setRangeAgeId(Long rangeAgeId) {
		this.rangeAgeId = rangeAgeId;
	}

	public String getRangeDesc() {
		return rangeDesc;
	}

	public void setRangeDesc(String rangeDesc) {
		this.rangeDesc = rangeDesc;
	}

}
