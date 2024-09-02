import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-pokemons',
  templateUrl: './page-pokemons.component.html',
  styleUrls: ['./page-pokemons.component.css']
})
export class PagePokemonsComponent implements OnInit{

  isDetail:boolean = false;
  isDelete:boolean = false;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    let idRoute =this.route.snapshot.params['id']
    let taskRoute =this.route.snapshot.params['task']

    if (idRoute != undefined){
      if (taskRoute == "delete"){
        this.isDelete = true
      } else {
        this.isDetail = true;
      }
    }

  }

}
