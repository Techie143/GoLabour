import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pojo } from '../schema/pojo';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url : string = "http://localhost:8080/";

  constructor(private http : HttpClient, private pojo : Pojo) { }

  ajaxCall(data : Object, api : String) : Observable<any> {
    return this.http.post(this.url+api, data);
  }
  
  getLogin(data : Object) : Observable<any> {
    return new Observable((observer) => {
      observer.next(this.pojo.getLogin(data));
      observer.complete()
    });
  }


  getDetails(data:Object) : Observable<any> {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.getUserDetails(data));
      observer.complete();
    });
  }

  postUpdateDetails(data:Object) : Observable<any> {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.postUpdateDetails(data));
      observer.complete();
    });
  }

  postUpdatePassword(email : Object, data:Object) : Observable<any> {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.postUpdatePassword(email,data));
      observer.complete();
    });
  }
 
  postAddNewAddress(email : Object, data:Object) : Observable<any> {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.postAddNewAddress(email,data));
      observer.complete();
    });
  }

  removeAddress(email : Object, data : Object) : Observable<any> {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.removeAddress(email,data));
      observer.complete();
    });
  }

  getCategory() : Observable<any> {
    return new Observable((observer) => {
      observer.next(this.pojo.getCategory());
      observer.complete();
    });
  }

  postAddNewJob(email:Object, data:Object) {
    console.log(data);
    return new Observable((observer) => {
      observer.next(this.pojo.postAddNewJob(email,data));
      observer.complete();
    });
  }

  callGet() : Observable<any> {
    return;
  }

}
