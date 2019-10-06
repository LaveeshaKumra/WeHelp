import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
field;name;user;msg;date1;
username;email;address;mobile;desc;
info: any;
  constructor(private _http: Http,private _activatedroute: ActivatedRoute,private _dataService: DataService) {
    this._dataService.getDetails().subscribe(res => {
      this.info = res;
   });
   }

  ngOnInit() {
    this._activatedroute.paramMap.subscribe(params => {
      this.field = params.get("field");
      this.name=params.get("name");
     });
     this.user=localStorage.getItem("currentUser");
  }

  createReq(){
    //console.log(this.info[0].address);

    this._http.post('/api/addrequest', {'user':this.user,'name':this.name,'field':this.field,'desc':this.desc,'date1':this.date1 ,'address':this.address,'mobile':this.mobile}).subscribe(res =>{
      this.msg= JSON.parse(res.text());
     console.log(this.msg);
      if((this.msg)=="done"){}
  })
}
}
