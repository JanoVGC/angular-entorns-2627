export class Funcions {
    saludar(nom: string): string {
        return `Hola, ${nom}!`;
    }

    esMajor(edat: number): boolean {
        return edat >= 18;
    }

    sumarArrays(nums1: number[], nums2: number[]): number[] {
        if (nums1.length !== nums2.length) {
            throw new Error('Els arrays han de tenir la mateixa longitud');
        }

        return nums1.map((num: number, index: number) => num + nums2[index]);
    }
}
