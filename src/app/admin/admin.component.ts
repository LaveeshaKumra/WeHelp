import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
emp:Array<any>;
old:Array<any>;
reject1:Array<any>;
n;msg;
  constructor(private _dataService: DataService,private _http: Http) {
   this._dataService.getEmpNew().subscribe(res => this.emp = res);
   this._dataService.getEmp().subscribe(res => this.old = res);
     this._dataService.getRejected().subscribe(res => this.reject1 = res);

   }
  ngOnInit() {
  }

approve(n){
  this._http.post('/api/update',{'n':n}).subscribe(res=>{
    this.msg= JSON.parse(res.text());
    console.log(this.msg);
    document.location.reload();
  })
}
reject(n){
  this._http.post('/api/delete',{'n':n}).subscribe(res=>{
    this.msg= JSON.parse(res.text());
    console.log(this.msg);
    document.location.reload();
  })
}


}
