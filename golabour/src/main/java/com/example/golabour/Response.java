package com.example.golabour;

public class Response {
	private Object o;	

	private boolean status;
	
	public Object getO() {
		return o;
	}

	public boolean isStatus() {
		return status;
	}

	public void setO(Object o) {
		this.o = o;
	}
	
	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Response [o=" + o + ", status=" + status + "]";
	}
	
	
	
}
