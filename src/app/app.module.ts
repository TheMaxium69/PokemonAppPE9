import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PagePokemonsComponent } from './page-pokemons/page-pokemons.component';
import { PageFormComponent } from './page-form/page-form.component';
import { Page404Component } from './page-404/page-404.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { FooterComponent } from './global/footer/footer.component';
import { PokemonlistComponent } from './page-pokemons/pokemonlist/pokemonlist.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PagePokemonsComponent,
    PageFormComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    PokemonlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
