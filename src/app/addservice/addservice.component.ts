import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {
  result: Array<any>;
  service:Array<any>;
  name;age;email;mobile;field;address;city;desc;pass;exp;msg;
  constructor(private _dataService: DataService,private _http: Http) {
 	 this._dataService.getCities().subscribe(res => this.result = res);
   this._dataService.getServices().subscribe(res => this.service = res);
 }


  ngOnInit() {
  }

  createService(){
    this._http.post('/api/createService',
    {'name' : this.name,
    'age':this.age,
    'pass':this.pass,
    'field':this.field,
    'exp':this.exp,
    'city':this.city,
    'address':this.address,
    'mobile':this.mobile,
    'email':this.email,
    'desc':this.desc,
    })
    .subscribe(
      res=> {
        this.msg= JSON.parse(res.text());
      	console.log(this.msg);
        if((this.msg)=="done"){

        }
      }
    );
  }

  onchangecity(){}

}
