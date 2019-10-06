import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname;
    pass;
    msgg;contentEditable
  constructor(private _http: Http, private route: ActivatedRoute, private router: Router) {	}
  toggleEditable(event) {
       if ( event.target.checked ) {
           this.contentEditable = true;
      }
  }
  check()
  {

    if(this.contentEditable){
      console.log("checked");
      this._http.post('/api/emplogin', {'uname':this.uname,'pass':this.pass}).subscribe(res =>{
  	  this.msgg = JSON.parse(res.text());
  	  console.log(this.msgg);
      if((this.msgg)){
      localStorage.setItem('currentUser', this.uname);
      this.router.navigate(['/empPage']);
     }
     else{
       console.log("login credentials error!!");
     }
   });
  }
    else if(this.uname=='admin' && this.pass=='admin'){
      this.router.navigate(['/admin']);
  }

    else{
    this._http.post('/api/checklogin', {'uname':this.uname,'pass':this.pass}).subscribe(res =>{
	this.msgg = JSON.parse(res.text());
	console.log(this.msgg);
  if((this.msgg)){
    localStorage.setItem('currentUser', this.uname);
   this.router.navigate(['/']);
   }
   else{
     console.log("login credentials eroor!!");
   }

	});
}
}
  ngOnInit() {
  }


}
