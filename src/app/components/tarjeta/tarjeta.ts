/** Aquest fitxer conté la lògica: propietats i metodes i  getters i setters */

import { Component } from '@angular/core';
import type { Producte } from '../../interfaces/Producte';

@Component({
  selector: 'app-tarjeta', /*  Per usarlo al HTML d'altres components, com un etiqueta HTML personalitzada*/
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu: number = 1299; 
  estoc: number = 5; 

  producte : Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299, 
    estoc: 5, 
    categoria: 'Informatica',
    

  };

  /* Getter --> tipus especial de propietat calculada. En lloc de guardar un vlaor, el calcula cada cop que s'accedeix
    get nomDelGetter(): TipusRetorn {
    return calcul; 
    }

    Al Template s'usa com una propietat, sense parametres {{nomDelGetter}}


  */

    // Getter1: preu amb IVA del 21%
    get preuAmbIva(): number {
      return this.producte.preu * 1.21
    }

    // Getter2: estat de disponibilitat en text
    get estatDisponibilitat(): string{
      const estoc = this.producte.estoc ?? 0;
      if (estoc === 0) return 'Esgotat';
      if (estoc < 3) return 'Ultimes unitats';
      return 'Disponible'; 
    }

}
  /* interpolacio de dades
  Permet conectar les dades del TS a l'html 
  Permet incrustar expressions TS dins l'HTML, angular avalua l'expressio i mostra el resultat com a text

  {{nomPropietat}} --> mostra el valor d'una propietat de la classe
  {{2 + 3}} --> mostra 5
  {{text.toUpperCase()}} --> mostra el text amb majuscules
  {{edat >= 18 ? 'Major d\ 'edat' : Menor d\ 'edat}} --> operador ternari

  amb {{nom}} --> el valor pot canviar i l'html s'actualitzara automaticament. Harcoded es x sempre es estatic

*/















