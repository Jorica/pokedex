import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedevService {

  private apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  getPokemonsList(): Observable<any> {
    const params = new HttpParams()
      .set('limit', '20');
    return this.http.get(`${this.apiUrl}/pokemon`, { params });
  }

  getPokememonByIdOrName(query: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${query}`)
    .pipe(
      map((pokemon: any) => {
        return {
          abilities: pokemon.abilities,
          base_experience: pokemon.base_experience,
          height: pokemon.height,
          id : pokemon.id,
          image: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
          species: pokemon.species,
          weight: pokemon.weight,
        }
      })
    )
  }
}
