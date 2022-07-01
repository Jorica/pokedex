import { Component, OnInit } from '@angular/core';
import { PokedevService } from 'src/app/services/pokedev.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemones: any = [];
  constructor(private readonly pokedevSvc: PokedevService) { }

  ngOnInit(): void {

    this.pokedevSvc.getPokemonsList()
    .subscribe(pokemones => {
      this.pokemones = pokemones.results;
      console.log(this.pokemones);
      });


  }

}
