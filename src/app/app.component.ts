import {Component, OnInit} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*
  *
  * VARIABLE GLOBAL
  *
  * */

  APP_ENV:string = "DEV";
  API_URL:string = "";
  API_URL_TOKEN:string = "";
  TOKEN:string = "jesuistokenahahahha"

  ngOnInit() {

    if (this.APP_ENV === 'DEV') {
      this.API_URL = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon';
      this.API_URL_TOKEN = "http://vps206.tyrolium.fr/token/token.php";
    } else {
      this.API_URL = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon';
      this.API_URL_TOKEN = "http://vps206.tyrolium.fr/token/token.php";
    }

  }

  /*
  *
  * FUNCTION GLOBAL
  *
  * */

  createCors():{ headers: HttpHeaders} {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    const options: {headers: HttpHeaders} = { headers: headers };

    return options;
  }

  createCorsToken():{ headers: HttpHeaders} {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.TOKEN,
    })
    const options: {headers: HttpHeaders} = { headers: headers };

    return options;
  }



}
