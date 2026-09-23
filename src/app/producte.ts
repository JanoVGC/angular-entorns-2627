// Primera classe
export class Producte {
    nom: string;
    preu: number;
    disponible: boolean;

    constructor(nom: string, preu: number, disponible: boolean) {
        this.nom = nom;
        this.preu = preu;
        this.disponible = disponible;
    }

    // metode normal
    // cometes accentuades per a fer interpolació de variables
    toString(): string {
        return `Nom: ${this.nom}, Preu: ${this.preu}, Disponible: ${this.disponible}`;
    }

     //getter i setter
     getPreuIva(): number {
        return this.preu * 1.21;
    }

    setPreuIva(preu: number): void {
        this.preu = preu / 1.21;
    }



    

    getNom(): string {
        return this.nom;
    }
    getPreu(): number {
        return this.preu;
    }
    getDisponible(): boolean {
        return this.disponible;
    }

    setNom(nom: string): void {
        this.nom = nom;

    }
    setPreu(preu: number): void {
        this.preu = preu;
    }
    setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }




}