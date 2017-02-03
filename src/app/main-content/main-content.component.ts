import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon, PokemonDetails } from '../models/pokemon-models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonDetails: PokemonDetails;
  errorMessage: string;
  currentPokemon: Pokemon;


  constructor(private pokedexService: PokedexService) { }
  ngOnChanges() {
    if (this.currentPokemon != this.pokemon) {
      this.currentPokemon = this.pokemon;
      this.getPokemon();
    }
  }

  ngOnInit() {
    this.currentPokemon = this.pokemon;
    this.getPokemon();
  }

  getPokemon() {
    this.pokedexService.getPokemon(this.currentPokemon.url).subscribe(
      pokemonDetails => this.pokemonDetails = pokemonDetails,
      error => this.errorMessage = <any>error);
  }
}
