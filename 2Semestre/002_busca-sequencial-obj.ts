import { objNomes } from "./data/vetor-obj-nomes.ts";
import { ObjNomesType } from "./types/ObjNomes.ts"

type FnComp = (obj: ObjNomesType, name: string) => boolean;

function buscaSequencialObj(arr: ObjNomesType[], fnComp: FnComp, name: string): number {
    for(let i = 0; i < arr.length; i++) {
        if(fnComp(arr[i], name)) return i;
    }

    return -1;
}

function compararNome(obj: ObjNomesType, name: string) {
    return obj.first_name === name.toUpperCase();
}

console.log("Posição do Alexandre: ", buscaSequencialObj(objNomes, compararNome, "Alexandre"));