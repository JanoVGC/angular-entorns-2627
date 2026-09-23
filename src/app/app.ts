import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/Producte';
import { Producte as ProducteClass } from './producte'; // importem la classe Producte amb un alias per evitar conflictes amb la interfície Producte


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
  // OBJECTIU DE LA SESSIÓ 2: veure la diferència entre JS i TS.
  // Els tipus ajuden a detectar errors abans d'executar el codi.

   //OBJECTIU DE LA SESSIÓ 2: Veure la diferència entre JS i TS --> TS = JS + tipus.
    //ELS TIPUS no canvien com funciona el codi --> AJUDEN A DETECTAR ERRORS abans d'executar.
    // " undefined is not a function? " --> AIXÒ ÉS EL QUE VOLEM EVITAR!!!!!

    /*function saluda (nom) {
      return nom.toUpperCase();
    }

    saluda (40);
    --> Parameter 'nom' implicitly has an 'any' type
    */

   
    /*function saluda(nom:string) {
      return nom.toUpperCase();
    }

    saluda(40);

    --> Argument of type 'number' is not assignable to parameter of type 'string'.
    */

  // TIPUS BÀSICS
  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  // ARRAYS TIPATS
  colors: string[] = ['vermell', 'verd', 'blau'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  // TypeScript infereix el tipus automàticament.
  ciutat = 'Lleida';
  codiP = 25605;

  // Objecte que compleix la interfície Producte.
  producte: Producte = {
    id: 1,
    nom: 'PC',
    preu: 999,
    disponible: true,
  };
  
  producte2: Producte = {
    id: 2,
    nom: 'Portàtil',
    preu: 1299,
    disponible: false,
  };

  /*
  productes: Producte[] = [
    {
      id: 1,  
    nom: 'PC',
    preu: 999,
    disponible: true,
    },
    {
      id: 2,
      nom: 'Portàtil',
      preu: 1299,
      disponible: false,
    }]

    */

    productes: Producte[] = [this.producte,  this.producte2];

      p1 = new ProducteClass('PC', 999, true);
      p2 = new ProducteClass('Portàtil', 1299, false);

    constructor() {
      console.log(this.p1.toString());
      console.log(this.p2.toString());
    }

    // 1. afegiu un metode a la classe producte descripcio que retorni un string amb nom i preu.
    // 2. Metode descompte() i mostreu el descompte per consola 
    // 3  creeu un nou producte i mostreu el descompte per consola
    //4. cerqueu la manera de mostrar el descompte amb un popup

    

  
}