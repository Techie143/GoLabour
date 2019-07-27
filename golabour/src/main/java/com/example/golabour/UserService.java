package com.example.golabour;

public interface UserService {

	Response authenticateUser(User user);
	
	String registerUser(User user);
	
	Response getProfile(User user);
	
	Response updateProfile(User user);
	
}
