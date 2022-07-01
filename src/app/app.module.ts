import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPokemonComponent } from './main/card-pokemon/card-pokemon.component';
import { ListPokemonComponent } from './main/list-pokemon/list-pokemon.component';
import { 
  DxButtonModule,

 } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
<<<<<<< Updated upstream
    HttpClientModule
=======
    AppRoutingModule,
    DxButtonModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
