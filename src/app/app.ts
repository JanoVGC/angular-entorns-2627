import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/Producte';
import { Producte as ProducteClass } from './producte'; // importem la classe Producte amb un alias per evitar conflictes amb la interfície Producte
import { Gelat } from './models/gelats';
import { Funcions } from './funcions';
import { Alumne } from './alumne';


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
    descripcio: 'Un ordinador de sobretaula potent i fiable',
  };
  
  producte2: Producte = {
    id: 2,
    nom: 'Portàtil',
    preu: 1299,
    disponible: false,
    descripcio: 'Un portàtil lleuger i potent per treballar i jugar',
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

      const funcions = new Funcions();
      console.log(funcions.saludar('Angular'));
      console.log(funcions.esMajor(18));
      console.log(funcions.sumarArrays([1, 2, 3], [4, 5, 6]));

      const alumne1 = new Alumne('Laia', 20, 'Desenvolupament d\'Aplicacions Web', [7, 8, 6]);
      const alumne2 = new Alumne('Pau', 19, 'Sistemes Microinformàtics i Xarxes', [4, 3, 5]);
      console.log(alumne1.presentar());
      console.log(alumne1.haAprobat);
      console.log(alumne2.presentar());
      console.log(alumne2.haAprobat);
    }

    // 1. afegiu un metode a la classe producte descripcio que retorni un string amb nom i preu.
    // 2. Metode descompte() i mostreu el descompte per consola 
    // 3  creeu un nou producte i mostreu el descompte per consola
    //4. cerqueu la manera de mostrar el descompte amb un popup



    gelats: Gelat[] = [
      {
        id: 1,
        nom: 'Gelat de xocolata',
        preu: 2.5,
        disponible: true,
        sabor: 'xocolata',
        descripcio: 'Gelat de xocolata amb trossets de xocolata',
      },
      {
        id: 2,
        nom: 'Gelat de vainilla',
        preu: 2.0,
        disponible: true,
        sabor: 'vainilla',
        descripcio: 'Gelat de vainilla amb trossets de galeta',
      }, 
      {
        id: 3,
        nom: 'Gelat de maduixa',
        preu: 2.5,
        disponible: false,
        sabor: 'maduixa',
        descripcio: 'Gelat de maduixa amb trossets de fruita',

      }, 
      {
        id: 4,
        nom: 'Gelat de llimona',
        preu: 2.0,
        disponible: true,
        sabor: 'llimona',
        descripcio: 'Gelat de llimona amb trossets de fruita',

      },
      {
        id: 5,
        nom: 'Gelat de coco',
        preu: 2.5,
        disponible: true,
        sabor: 'coco',
        descripcio: 'Gelat de coco amb trossets de coco',

      }

    ]

    





  
}