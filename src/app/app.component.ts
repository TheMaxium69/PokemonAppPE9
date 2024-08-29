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
  TOKEN:string = "jesuistokenahahahha"

  ngOnInit() {

    if (this.APP_ENV === 'DEV') {
      this.API_URL = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon';
    } else {
      this.API_URL = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon';
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
      // 'Authorisation': 'Bearer ' + this.TOKEN,
    })
    const options: {headers: HttpHeaders} = { headers: headers };

    return options;
  }




}
