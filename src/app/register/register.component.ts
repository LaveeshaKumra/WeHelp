import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  uname;email;address;city;mobile;msg; pass;durationInSeconds;
  constructor(private _http: Http, private route: ActivatedRoute, private router: Router,private _snackBar: MatSnackBar) {
	}

  togglePassword(){}

  createUser()
  {

    this._http.post('/api/adduser', {'uname':this.uname,'pass':this.pass,'email':this.email,'address':this.address,'city':this.city,'mobile':this.mobile}).subscribe(res =>{
      this.msg= JSON.parse(res.text());
    	console.log(this.msg);
      if((this.msg)=="done"){
        /*this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });*/
      }
	});

  }
  ngOnInit() {
  }

}
/*
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
*/
