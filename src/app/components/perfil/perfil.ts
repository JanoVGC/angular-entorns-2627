import { Component } from '@angular/core';
import { Alex } from '../../interfaces/alex';



@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  alex: Alex = {
    nom: 'Alex',
    cognom: 'Alias',
    edat: 21,
    cicle: 'DAW',
  };

  // Getter nomComplet
  get nomComplet(): string {
    return `${this.alex.nom} ${this.alex.cognom}`;
  }

  // Getter inicials
  get inicials(): string {
    const nom = this.alex.nom.charAt(0);
    const cognom = this.alex.cognom.charAt(0);
    return `${nom}${cognom}`;
  }

  // Getter Generacio
  get generacio(): string {
    const edat = this.alex.edat;
    if (edat >= 25 && edat <= 40) return "Milennial";
    if (edat >= 10 && edat <= 24) return "Gen Z";
    return "Altre";
  }



















}
  /* interpolacio de dades
  Permet conectar les dades del TS a l'html 
  Permet incrustar expressions TS dins l'HTML, angular avalua l'expressio i mostra el resultat com a text

  {{nomPropietat}} --> mostra el valor d'una propietat de la classe
  {{2 + 3}} --> mostra 5
  {{text.toUpperCase()}} --> mostra el text amb majuscules
  {{edat >= 18 ? 'Major d\ 'edat' : Menor d\ 'edat}} --> operador ternari

*/

