package com.example.golabour;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name= "labour")
public class Labour {
	@Id
	private String email;
	private String password;
	private String name;
	private long mobile;
	private int age;
	private String gender;
	
	@OneToMany(cascade = CascadeType.ALL)  
	@JoinColumn(name="email")    
	private List<Laddress> address; 
	
	@OneToMany(cascade = CascadeType.ALL)  
	@JoinColumn(name="email")    
	private List<Job> job;
	
	public Labour() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Labour(String email, String password, String name, long mobile, int age, String gender) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.mobile = mobile;
		this.age = age;
		this.gender = gender;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public long getMobile() {
		return mobile;
	}
	
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public List<Laddress> getAddress() {
		return address;
	}

	public void setAddress(List<Laddress> address) {
		this.address = address;
	}

	public List<Job> getJob() {
		return job;
	}

	public void setJob(List<Job> job) {
		this.job = job;
	}

	@Override
	public String toString() {
		return "Labour [email=" + email + ", password=" + password + ", name=" + name + ", mobile=" + mobile + ", age="
				+ age + ", gender=" + gender + ", address=" + address + ", job=" + job + "]";
	}
	
	
}
