import { objNomes } from "./data/vetor-obj-nomes.mjs";

type objNomesType = {
    "first_name": string,
    "group_name": string,
    "classification": string,
    "frequency_female": number | null,
    "frequency_male": number | null,
    "frequency_total": number,
    "frequency_group": number,
    "ratio": number,
    "alternative_names": number
}

function buscaSequencialObj(arr: objNomesType[], fnComp: (obj: objNomesType, name: string) => boolean, name: string): number {
    for(let i = 0; i < arr.length; i++) {
        if(fnComp(arr[i], name)) return i;
    }

    return -1;
}

function compararNome(obj: objNomesType, name: string) {
    return obj.first_name === name.toUpperCase();
}

console.log("Posição do Alexandre: ", buscaSequencialObj(objNomes, compararNome, name));