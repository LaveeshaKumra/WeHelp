import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname;lname;email;comment;msg;
  constructor(private _http: Http, private route: ActivatedRoute, private router: Router) {
	}

     feedback1(){
    this._http.post('/api/feedback',
    {'fname' : this.fname,
    'lname':this.lname,
    'email':this.email,
    'comment':this.comment
    })
    .subscribe(res =>{
      this.msg= JSON.parse(res.text());
    	console.log(this.msg);
      if((this.msg)=="done"){}
	});
  }
  ngOnInit() {
  }

}
