import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {PagePokemonsComponent} from "./page-pokemons/page-pokemons.component";
import {PageFormComponent} from "./page-form/page-form.component";
import {Page404Component} from "./page-404/page-404.component";

const routes: Routes = [
  {path:"",component:PageHomeComponent},
  {path:"home",component:PageHomeComponent},
  {path:"pokemons",component:PagePokemonsComponent},
  {path:"pokemons/:id",component:PagePokemonsComponent},
  {path:"pokemons/:task/:id",component:PagePokemonsComponent},
  {path:"form",component:PageFormComponent},
  {path:"**",component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
