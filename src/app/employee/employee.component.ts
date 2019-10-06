import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { DataService } from '../data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
user;msg;n;
new:Array<any>;
app:Array<any>;
reject1:Array<any>;

  constructor(private _http: Http, private route: ActivatedRoute, private router: Router,private _dataService: DataService) {
    this.user=localStorage.getItem('currentUser');
    //console.log(this.user);
    this._dataService.getNewReq(this.user).subscribe(res => this.new = res);
    this._dataService.getAppReq(this.user).subscribe(res => this.app = res);
    this._dataService.getRejReq(this.user).subscribe(res => this.reject1 = res);
}

  ngOnInit() {
  }
  approve(n){
    //console.log(n);
    this._http.post('/api/updatereq',{'n':n}).subscribe(res=>{
      this.msg= JSON.parse(res.text());
      console.log(this.msg);
      document.location.reload();
    })
  }
  reject(n){
    this._http.post('/api/deletereq',{'n':n}).subscribe(res=>{
      this.msg= JSON.parse(res.text());
      console.log(this.msg);
      document.location.reload();
    })
  }
}
