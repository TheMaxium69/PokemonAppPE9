import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PokemonService} from "../../_service/pokemon/pokemon.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-formcreate',
  templateUrl: './formcreate.component.html',
  styleUrls: ['./formcreate.component.css']
})
export class FormcreateComponent{

  constructor(private pokemonService:PokemonService,
              private app:AppComponent) {}


  onSubmit(form: NgForm) {


    this.pokemonService.postPokemon(this.app.API_URL, form.value, this.app.createCors()).subscribe(reponse => {

      if (reponse.true && reponse.true == "Pokemon Create") {

        console.log("BIEN CREER");

      } else {

        console.log("ERR INVALIDE");

      }

    });




  }

}
