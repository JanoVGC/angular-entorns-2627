import { Component, Output , Input, EventEmitter } from '@angular/core';
import { ProducteLab } from '../producte-lab';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducte {
  // fitxa-producte --> es fill, nomes printeja un producte
  // Declarem input i output
  @Input() producte !: ProducteLab;
  @Input() enCarret = false; 
  @Output() afegir = new EventEmitter<ProducteLab>();
  @Output() treure = new EventEmitter<ProducteLab>();

  get teEstoc(): boolean {
    return this.producte.estoc > 0; 
  }

  get classesFitxa (): string {
    const classes = ['fitxa'];
    if (this.producte.preu>500) classes.push('destacat'); 
    if (this.producte.preu<50) classes.push('oferta');
    if (this.producte.estoc === 0) classes.push('esgotat');
    return classes.join(' ');
  }

   get imatgeSegura (): string {
    return this.producte.imatgeUrl || 'https://picsum.photos/200/300'
  }

  get urlFitxa(): string {
    return `https://botiga.cat/producte/${this.producte.id}`;
  }

  clicAfegir(): void {
    this.afegir.emit(this.producte);
  }

  clicTreure(): void {
    this.treure.emit(this.producte);
  }






}
