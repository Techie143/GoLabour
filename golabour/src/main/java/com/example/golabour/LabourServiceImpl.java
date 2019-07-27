package com.example.golabour;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class LabourServiceImpl implements LabourService {

	@Autowired
	LabourDaoRepository ldr;
	@Autowired
	UserDaoRepository udr;
	@Autowired
	JobDaoRepository jdr;
	@Autowired
	UserAddresDaoRepository udar;
	@Autowired
	CategoryDaoRepository cdr;

	@Override
	public String registerLabour(Labour labour) {
		// TODO Auto-generated method stub
		System.out.println(labour);
		ldr.save(labour);
		return "Registration Successfully";
	}

	@Override
	public Response authenticateLabour(Labour labour) {
		// TODO Auto-generated method stub
		Optional<Labour> ot = ldr.findById(labour.getEmail());
		Response res = new Response();
		if(ot.isPresent()) {
			Labour ls = ot.get();
			if(ls.getPassword().equals(labour.getPassword())) {
				res.setStatus(true); 
				res.setO(ls.getName());
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
	public Response getProfile(Labour labour) {
		// TODO Auto-generated method stub
		Response res = new Response();
		Optional<Labour> ot = ldr.findById(labour.getEmail());
		if(ot.isPresent())
		{
			Labour ls = ot.get();
			System.out.println(ls);
			res.setStatus(true);
			res.setO(ls);
		}
		return res;
	}

	@Override
	public Response updateProfile(Labour labour) {
		// TODO Auto-generated method stub
		ldr.save(labour);
		Response res = new Response();
		res.setStatus(true);
		return res;
	}

	@Override
	public List<Labour> getLabours() {
		Response res = new Response();
		List<Labour> ot = ldr.findAll();
		return ot;
	}

}
