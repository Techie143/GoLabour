package com.example.golabour;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDaoRepository udr;
	@Autowired
	JobDaoRepository jdr;
	@Autowired
	UserAddresDaoRepository udar;
	@Autowired
	CategoryDaoRepository cdr;

	@Override
	public String registerUser(User user) {
		// TODO Auto-generated method stub
		System.out.println(user);
		udr.save(user);
		return "Registration Successfully";
	}

	@Override
	public Response authenticateUser(User user) {
		// TODO Auto-generated method stub
		Optional<User> ot = udr.findById(user.getEmail());
		Response res = new Response();
		if(ot.isPresent()) {
			User us = ot.get();
			if(us.getPassword().equals(user.getPassword())) {
				res.setStatus(true); 
				res.setO(us.getName());
				return res;
			}
			res.setStatus(false); 
			res.setO("Wrong Password");
			return res;
		}
		res.setStatus(false); 
		res.setO("Wrong Credentials");
		return res;
	}

	@Override
	public Response getProfile(User user) {
		// TODO Auto-generated method stub
		Response res = new Response();
		Optional<User> ot = udr.findById(user.getEmail());
		if(ot.isPresent())
		{
			User us = ot.get();
			System.out.println(us);
			res.setStatus(true);
			res.setO(us);
			
		}
		return res;
	}

	@Override
	public Response updateProfile(User user) {
		// TODO Auto-generated method stub
		udr.save(user);
		Response res = new Response();
		res.setStatus(true);
		return res;
	}
}
