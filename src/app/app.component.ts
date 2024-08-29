import {Component, OnInit} from '@angular/core';

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

  createCors(){

  }




}
