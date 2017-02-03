import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon, PokemonDetails, PokemonContainer } from './models/pokemon-models'


@Injectable()
export class PokedexService {
  private initialUrl = 'http://pokeapi.co/api/v2/pokemon';
  constructor(private http: Http) { }

  getPokemons(url: string) {
    var pokemonUrl = this.initialUrl;
    if (url) {
      pokemonUrl = url;
    }
    return this.http.get(pokemonUrl)
      .map(this.handleResponse)
      .catch(this.handleError);
  }
  getPokemon(url: string) {
    return this.http.get(url)
      .map(this.handlePokemonResponse)
      .catch(this.handleError);
  }
  private handlePokemonResponse(response: Response) {
    let pokemonResponse = response.json();
    let pokemonAbilities = [];
    let pokemonTypes = [];

    //get pokemon abilities
    for (var i = 0; i < pokemonResponse.abilities.length; i++) {
      pokemonAbilities.push(pokemonResponse.abilities[i].ability.name);
    }
    //get pokemon types
    for (var i = 0; i < pokemonResponse.types.length; i++) {
      pokemonTypes.push(pokemonResponse.types[i].type.name);
    }

    let pokemonDetails = new PokemonDetails(
      pokemonResponse.id, pokemonResponse.name, pokemonAbilities, pokemonResponse.weight,
      pokemonResponse.sprites.front_default, pokemonResponse.height, pokemonTypes);

    return pokemonDetails;
  }

  private handleResponse(response: Response) {
    let jsonResponse = response.json().results;
    let pokemons = [];
    for (var i = 0; i < jsonResponse.length; i++) {
      pokemons.push(new Pokemon(jsonResponse[i].name, jsonResponse[i].url));
    }

    let pokemonContainer = new PokemonContainer(response.json().previous, pokemons, response.json().next);

    return <PokemonContainer>pokemonContainer;
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}
