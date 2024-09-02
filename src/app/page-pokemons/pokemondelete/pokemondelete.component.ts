import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../_service/pokemon/pokemon.service";
import {AppComponent} from "../../app.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemondelete',
  templateUrl: './pokemondelete.component.html',
  styleUrls: ['./pokemondelete.component.css']
})
export class PokemondeleteComponent implements OnInit{

  reponseTXT:string = "Loading..."

  constructor(private pokemonService: PokemonService,
              private app:AppComponent,
              private route:ActivatedRoute) {
  }

  ngOnInit(){
    let id =this.route.snapshot.params['id']

    this.pokemonService.deletePokemon(this.app.API_URL, id).subscribe(response =>{

      console.log(response)

      if (response.true){
        this.reponseTXT = response.true
      } else if (response.err) {
        this.reponseTXT = response.err
      }

    });

  }

}
