import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  result:any;
    constructor(private _dataService: DataService,private _http: Http,private router: Router) {
    this._dataService.getuserdata(localStorage.getItem("currentUser")).subscribe(res => this.result = res);
   }

  ngOnInit() {
  }

}
