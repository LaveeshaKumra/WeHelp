import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  doctorData:Array<any>;
  msg;
  s1;
  name;
  constructor(private _http: Http,private router: Router,private toastr: ToastrService) {

    if(localStorage.getItem('currentUser')){
      alert(localStorage.getItem('currentUser'));
    }
  }
//check login credentials

  
  ngOnInit() {
  }
  serviceCall(s){
    this.s1=s;
    console.log(this.s1);
    this.router.navigate(['/servicePage', this.s1]);
  }
   logout(){
    alert("yy");
    alert(localStorage.getItem('currentUser'));
    localStorage.setItem('currentUser','null');
    alert(localStorage.getItem('currentUser'));
    }
}
