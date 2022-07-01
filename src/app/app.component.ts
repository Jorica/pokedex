import { Component, OnInit } from '@angular/core';
import { PokedevService } from './services/pokedev.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pokedex';

  pokemones: any = [];

  /**
   *
   */
  constructor(private readonly pokedevSvc: PokedevService) { }

  ngOnInit(): void {
    this.pokedevSvc.getPokemonsList()
      .subscribe(pokemones => this.pokemones = pokemones.results);
  }
}
