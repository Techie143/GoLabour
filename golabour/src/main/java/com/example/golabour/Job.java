package com.example.golabour;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.stereotype.Component;
@Component
@Entity
@Table(name= "job")
public class Job {
	
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	private int job_id;
	
	private String description;
	private String date;
	
	@OneToOne(targetEntity=Category.class)
	private Category category;
	
	@ManyToOne
	private User user;

	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getJob_id() {
		return job_id;
	}

	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}


}
