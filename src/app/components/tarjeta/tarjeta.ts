/*Aquest fitxer conté la lògica: propietats, mètodes, getters...*/

import { Component } from '@angular/core';
import { Producte2 } from '../../interfaces/producte2';
import { Producte } from '../../interfaces/producte';


@Component({
  selector: 'app-tarjeta',  /* Per usar-lo al HTML d'altres components, com una etiqueta HTML personalitzada*/
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu : number = 1299;
  estoc : number = 5;

  producte : Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299,
    estoc: 5,
    categoria: 'Informàtica',
    disponible: true

  };

   producte2 : Producte = {
    id: 2,
    nom: 'Ordinador Gamer',
    preu: 1099,
    estoc: 2,
    categoria: 'Informàtica',
    disponible: true
  };

  /* Getter --> és un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix.
  get nomDelGetter(): TipusRetorn {
    retrun calcul;
  }
    Al TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}}
  */

    //Getter1: preu amb IVA del 21%
    get preuAmbIva(): number {
      return this.producte.preu * 1.21;
    }

    //Getter2: estat de disponibilitat en text
    get estatDisponibilitat(): string{
      if (this.producte.estoc === 0) return 'Esgotat';
      if (this.producte.estoc < 3) return 'Últimes unitats';
      return 'Disponible';
    }




  producteXif : Producte2 =  {
    id : 1, 
    nom: 'Castanya', 
    preu: 12, 
    estoc: 60, 
    categoria: 'Aliment',
    descripcio: 'Castanyes ben bones',
    disponible: true

  };

  mostrarDesc = false; 
   
  toogleDesc() : void {
    this.mostrarDesc = true;

  }

  /* AFEGIR ETIQUETA OFERTA I GRATUIT
    si el preu es inferior a 20 --> oferta
    si el preu es 0 --> gratuit
    si el preu es superior a 100 --> premium  


    if find d'un for per marcar productes especials

    si la categoria es informatica --> div amb "destacat"
    podeu posar estils, i si voleu emoji estrella....
  
  
  */ 

    



    

  



}

