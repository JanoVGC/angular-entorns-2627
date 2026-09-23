import { Gelat } from './app/gelats';

export class LlistaGelats {
	private gelats: Gelat[];
	private nom: string;

	constructor(nom: string, gelats: Gelat[] = []) {
		this.nom = nom;
		this.gelats = gelats;
	}

	afegirGelat(gelat: Gelat): void {
		this.gelats.push(gelat);
	}

	eliminarPerId(id: number): boolean {
		const index: number = this.gelats.findIndex((gelat: Gelat) => gelat.id === id);

		if (index === -1) {
			return false;
		}

		this.gelats.splice(index, 1);
		return true;
	}

	getNom(): string {
		return this.nom;
	}

	getGelats(): Gelat[] {
		return [...this.gelats];
	}
}


