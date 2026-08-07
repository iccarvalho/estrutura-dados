import { objNomes } from "./data/vetor-obj-nomes.ts";
import { ObjNomesType } from "./types/ObjNomes.ts"

type FnComp = (midValue: ObjNomesType, searchValue?: string) => number;

function buscaBinariaObj(arr: ObjNomesType[], fnComp: FnComp, name?: string) {
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
    else return 1;
}

console.log(`Posição de ALEXANDRE: ${buscaBinariaObj(objNomes, compararNome)}`);
console.log(`Posição de IGOR: ${buscaBinariaObj(objNomes, compararNome, "IGOR")}`);