package com.example.golabour;

import java.util.List;

public interface LabourService {

	Response authenticateLabour(Labour labour);
	
	String registerLabour(Labour labour);
	
	Response getProfile(Labour labour);
	
	Response updateProfile(Labour labour);

	List<Labour> getLabours();	
}