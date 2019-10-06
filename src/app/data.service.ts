import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})

export class DataService {
token;city;emp;
  result:any;
  result1:any;
  result2:any;
  user:any;

  constructor(private _http: Http) {}

  getCities() {
    return this._http.get("/api/cities")
      .map(result => this.result = result.json().data);
  }

  getServices() {
    return this._http.get("/api/services")
      .map(result => this.result = result.json().data);
  }

  getEmpNew() {
    return this._http.get("/api/employeesReq")
      .map(result => this.result1 = result.json().data);
  }

  getEmp() {
    return this._http.get("/api/employees")
      .map(result => this.result1 = result.json().data);
  }

  getRejected(){
    return this._http.get("/api/getRejected")
      .map(result => this.result1 = result.json().data);
  }

  getNewReq(emp ) {
    return this._http.post("/api/emp1",{emp:emp})
      .map(result => this.result1 = result.json().data);
  }
  getAppReq(emp) {
    return this._http.post("/api/emp2",{emp:emp})
      .map(result => this.result1 = result.json().data);
  }
  getRejReq(emp) {
    return this._http.post("/api/emp3",{emp:emp})
      .map(result => this.result1 = result.json().data);
  }

  search2(a,b) : Observable<any[]>{
    return  this._http.post("/api/list",{token:a,city:b})
      .map(result => this.result1 = result.json().data);
    }

    getDetails(): Observable<any[]> {
       return this._http.post("/api/details",{user:localStorage.getItem("currentUser")})
        .map(result => this.result2 = result.json().data);
    }

    getuserdata(user): Observable<any[]> {
      //console.log(user);
      return this._http.post("/api/userdata",{user})
        .map(result => this.result = result.json().data);
    }
}
