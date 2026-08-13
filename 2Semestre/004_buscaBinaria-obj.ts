import { objNomes } from "./data/vetor-obj-nomes.ts";

type ObjNomesType = {
    "first_name": string,
    "group_name": string,
    "classification": string,
    "frequency_female": number | null,
    "frequency_male": number | null,
    "frequency_total": number,
    "frequency_group": number,
    "ratio": number,
    "alternative_names": string
};

function buscaBinariaObj<T>(arr: T[], fnComp: (midValue: T, searchValue?: string) => number, name?: string) {
    let start = 0;
    let end = arr.length -1;

    while(end >= start) {
        let mid = Math.floor((start + end) / 2);

        switch(fnComp(arr[mid], name)) {
            case 0:
                return mid;
            case 1:
                start = mid + 1
                break
            default:
                end = mid - 1
                break
        }
    }
}

function compararNome(midValue: ObjNomesType, searchValue = "ALEXANDRE"): number {
    if(searchValue === midValue.first_name) return 0;
    else if(searchValue > midValue.first_name) return 1;
    else return -1;
}

console.log(`Posição de ALEXANDRE: ${buscaBinariaObj(objNomes, compararNome)}`);
console.log(`Posição de IGOR: ${buscaBinariaObj(objNomes, compararNome, "IGOR")}`);