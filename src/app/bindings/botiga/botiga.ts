import { Component } from '@angular/core';
import { Producte } from '../../producte';
import { ProducteLab,PRODUCTES_LAB } from '../producte-lab';

@Component({
  selector: 'app-botiga',
  imports: [],
  templateUrl: './botiga.html',
  styleUrl: './botiga.css',
})
export class Botiga {

  title = "Botiga de bindings";
  productes: ProducteLab[] = PRODUCTES_LAB;
  modeCompacte = false; 
  carret: number[] = [];
  afegitAlCarret = false; 

  // metode per veure que hi tenim al carrito

  toEstoc(p: ProducteLab): boolean  {
    return p.estoc > 0; 
  }

  producteDestacat (p:ProducteLab): boolean {
    return p.preu>500;

  }

  classesFitxa (p:ProducteLab): string {
    const classes = ['fitxa'];
    if (p.preu>500) classes.push('destacat'); 
    if (p.preu<50) classes.push('oferta');
    if (p.estoc === 0) classes.push('esgotat');
    return classes.join(' ');
  }

  imatgeSegura (p: ProducteLab): string {
    return p.imatgeUrl || 'https://picsum.photos/200/300'
  }

  urlFitxa(p:ProducteLab): string {
    return `https://botiga.cat/producte/${p.id}`;
  }
  
  afegir(): boolean {
    return this.afegitAlCarret = true; 
   
    }
  }














