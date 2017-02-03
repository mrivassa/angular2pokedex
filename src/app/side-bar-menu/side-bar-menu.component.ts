import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../models/pokemon-models';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [PokedexService]
})
export class SideBarMenuComponent implements OnInit {
  @Input() pokeDex: PokedexService;
  errorMessage: string;
  pokemons: Pokemon[];
  selectedPokemon: Pokemon;
  next: string;
  previous: string;
  constructor(private pokedexService: PokedexService) {
  }
  getPokemons() {
    this.pokedexService.getPokemons(null).subscribe(
      pokemonContainer => {
        this.pokemons = pokemonContainer.pokemons;
        this.next = pokemonContainer.next;
        this.previous = pokemonContainer.previous;
      },
      error => this.errorMessage = <any>error
    );
  }
  select(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  nextPokemonBatch() {
    this.pokedexService.getPokemons(this.next).subscribe(
      pokemonContainer => {
        this.pokemons = pokemonContainer.pokemons;
        this.next = pokemonContainer.next;
        this.previous = pokemonContainer.previous;
      },
      error => this.errorMessage = <any>error
    );
  }
  previousPokemonBatch(){
    this.pokedexService.getPokemons(this.previous).subscribe(
      pokemonContainer => {
        this.pokemons = pokemonContainer.pokemons;
        this.next = pokemonContainer.next;
        this.previous = pokemonContainer.previous;
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getPokemons();
  }
}
