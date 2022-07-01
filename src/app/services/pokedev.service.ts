import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedevService {

  private apiUrl = environment.apiUrl;
  private pikemonsLimit = 20;
  private arrPakemons: any[] = [];

  constructor(private readonly http: HttpClient) {
    this.getPokemonsList();
  }

  get pokemonsList(): any[] {
    return this.arrPakemons;
  }

  getPokemonsList() {
    for (let i = 1; i <= this.pikemonsLimit; i++) {
      this.getPokememonByIdOrName(i)
        .subscribe((pokemon) =>
          this.arrPakemons.push(pokemon));
    }
  }

  getPokememonByIdOrName(query: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${query}`)
      .pipe(
        map((pokemon: any) => {
          return {
            abilities: pokemon.abilities,
            base_experience: pokemon.base_experience,
            height: pokemon.height,
            id: pokemon.id,
            image: pokemon.sprites.other.dream_world.front_default,
            name: pokemon.name,
            species: pokemon.species,
            weight: pokemon.weight,
          }
        })
      )
  }
}
