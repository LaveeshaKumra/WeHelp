import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
result: Array<any>;
results: Array<any>;
token;
city;serviceSelect;msg;
  constructor(private _dataService: DataService,private _http: Http,private _activatedroute: ActivatedRoute,private router: Router) {
  this._dataService.getCities().subscribe(res => this.result = res);
 }


search(){
  this._dataService.search2(this.token,this.city).subscribe(res=>this.results = res);
 }


book(n,f){
  var  x=localStorage.getItem('currentUser');
  if(x){
    alert(x);
    this.router.navigate(['/requestPage', n , f]);
  }
  else{
    this.router.navigate(['/login']);
  }




}
ngOnInit() {
  //get obj id
  this._activatedroute.paramMap.subscribe(params => {
    this.token = params.get("id");
   });
}

}
