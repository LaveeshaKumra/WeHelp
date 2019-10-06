import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from '../elements/edit-profile/edit-profile.component';
import { DataService } from '../data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
result:any;
user=localStorage.getItem("currentUser");
  constructor(private _dataService: DataService,private _http: Http,private router: Router) {
  this._dataService.getuserdata(localStorage.getItem("currentUser")).subscribe(res => this.result = res);
 }

  ngOnInit() {
  }

}
