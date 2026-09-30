import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  
}
  /* interpolacio de dades
  Permet conectar les dades del TS a l'html 
  Permet incrustar expressions TS dins l'HTML, angular avalua l'expressio i mostra el resultat com a text

  {{nomPropietat}} --> mostra el valor d'una propietat de la classe
  {{2 + 3}} --> mostra 5
  {{text.toUpperCase()}} --> mostra el text amb majuscules
  {{edat >= 18 ? 'Major d\ 'edat' : Menor d\ 'edat}} --> operador ternari



*/

