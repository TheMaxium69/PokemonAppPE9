import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PokemonInterface} from "../../_interface/pokemon.interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestApiInterface} from "../../_interface/request-api.interface";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  getPokemonAll(url:string):Observable<PokemonInterface[]>{
    return this.http.get<PokemonInterface[]>(url + "&task=getAll");
  }

  getPokemonOne(url:string, id:string|number):Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(url + "&task=getById&id=" + id);
  }

  postPokemon(url:string,form:any,headers:{ headers: HttpHeaders}):Observable<RequestApiInterface>{
    let body = JSON.stringify(form);
    return this.http.post<RequestApiInterface>(url + "&task=createPokemon&userApi=joke", body, headers);
  }


}
