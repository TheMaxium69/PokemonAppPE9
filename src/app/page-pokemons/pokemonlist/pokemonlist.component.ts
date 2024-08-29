import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "../../_interface/pokemon.interface";
import {AppComponent} from "../../app.component";
import {PokemonService} from "../../_service/pokemon/pokemon.service";

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit{

  pokemonList:PokemonInterface[]|undefined;

  constructor(private app:AppComponent,
              private pokemonService:PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonAll(this.app.API_URL).subscribe(pokemonAll =>{

      this.pokemonList = pokemonAll;

      console.table(this.pokemonList)

    });



  }

}
