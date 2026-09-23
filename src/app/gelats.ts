export class Gelat {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    sabor: string;
    descripcio?: string;

    constructor(id: number, nom: string, preu: number, disponible: boolean, sabor: string, descripcio?: string) {
        this.id = id;
        this.nom = nom;
        this.preu = preu;
        this.disponible = disponible;
        this.sabor = sabor;
        this.descripcio = descripcio;
    }

    toString(): string {
        return `ID: ${this.id}, Nom: ${this.nom}, Preu: ${this.preu}, Disponible: ${this.disponible}, Sabor: ${this.sabor}, Descripció: ${this.descripcio}`;
    }

    getActius(): boolean {
        return this.disponible;
    }

    findById(id: number): Gelat | undefined {
        if (this.id === id) {
            return this;
        }
        return undefined;
    }

    formatarElement(element: Gelat): string {
        return `ID: ${element.id}, Nom: ${element.nom}, Preu: ${element.preu}, Disponible: ${element.disponible}, Sabor: ${element.sabor}, Descripció: ${element.descripcio}`;
    }   
    

    getDescripcio(): string {
        return this.descripcio || '';
    }

    setDescripcio(descripcio: string): void {
        this.descripcio = descripcio;
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
    getSabor(): string {
        return this.sabor;
    }

    setSabor(sabor: string): void {
        this.sabor = sabor;

    }
























}
