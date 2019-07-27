package com.example.golabour;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

@RestController
@CrossOrigin
public class GoController {

	private UserService us;
	private LabourService ls;
	@Autowired
	public void setUs(UserService us) {
		System.out.println("Autowired");
		this.us = us;
	}

	@Autowired
	public void setLs(LabourService ls) {
		System.out.println("Autowired");
		this.ls = ls;
	}
	
	///http://localhost:8080/register/User?email=123@gmail.com&password=123
	@GetMapping("/register/User")
	public Response registerUser(@RequestParam String email, @RequestParam String password)
	{
		return null;
	}
	
	
	@PostMapping("/register/user")
	public Response registerUser(@RequestBody User user) {
		Response res = new Response();
		res.setO(us.registerUser(user));
		return res;
	}
	
	
	@PostMapping("/getLogin/user")
	public Response getLogin(@RequestBody User user) {
		System.out.println(user);
		Response res = us.authenticateUser(user);
		System.out.println(res);
		return res;
	}
	
	@PostMapping("/getDetails/user")
	public Response getProfile(@RequestBody User user) {
		System.out.println(user);
		return us.getProfile(user);
	}
	

	@PostMapping("/updateProfile/user")
	public Response updateProfile(@RequestBody User user) {
		System.out.println(user);
		return us.updateProfile(user);
	}
	
	@PostMapping("/register/labour")
	public Response registerLabour(@RequestBody Labour labour) {
		Response res = new Response();
		res.setO(ls.registerLabour(labour));
		return res;
	}
	
	@PostMapping("/getDetails/labour")
	public Response getProfile(@RequestBody Labour labour) {
		System.out.println(labour);
		return ls.getProfile(labour);
	}
	
	@GetMapping("/search/labour")
	public java.util.List<Labour> getLabours()
	{
		return ls.getLabours();
	}
	
	@PostMapping("/getLogin/labour")
	public Response getLogin(@RequestBody Labour labour) {
		System.out.println(labour);
		Response res = ls.authenticateLabour(labour);
		System.out.println(res);
		return res;
	}
	
	@PostMapping("/updateProfile/labour")
	public Response updateProfile(@RequestBody Labour labour) {
		System.out.println(labour);
		return ls.updateProfile(labour);
	}

	
}
