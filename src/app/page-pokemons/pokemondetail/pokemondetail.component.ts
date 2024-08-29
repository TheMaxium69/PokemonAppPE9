import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "../../_interface/pokemon.interface";
import {AppComponent} from "../../app.component";
import {PokemonService} from "../../_service/pokemon/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css']
})
export class PokemondetailComponent implements OnInit{

  isDB:boolean = false;
  pokemonOne:PokemonInterface|undefined

  constructor(private app:AppComponent,
              private pokemonService:PokemonService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    let idRoute = this.route.snapshot.params['id']

    this.pokemonService.getPokemonOne(this.app.API_URL, idRoute).subscribe(pokemonDB =>{

      this.pokemonOne = pokemonDB;
      this.isDB = true;

    });


  }


}
