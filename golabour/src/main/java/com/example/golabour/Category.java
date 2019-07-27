package com.example.golabour;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name= "category")
public class Category {
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	private int categoryID;
	private String categoryName;
	
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Category(String categoryName) {
		super();
		this.categoryName = categoryName;
	}

	public int getCategoryID() {
		return categoryID;
	}
	public void setCategoryID(int categoryID) {
		this.categoryID = categoryID;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	
	
  
}
