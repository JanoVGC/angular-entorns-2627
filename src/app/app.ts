import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/Producte';


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
}