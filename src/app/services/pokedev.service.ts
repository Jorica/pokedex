import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
