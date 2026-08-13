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

function buscaSequencialObj(arr: ObjNomesType[], fnComp: (obj: ObjNomesType, name: string) => boolean, name: string): number {
    for(let i = 0; i < arr.length; i++) {
        if(fnComp(arr[i], name)) return i;
    }

    return -1;
}

function compararNome(obj: ObjNomesType, name: string) {
    return obj.first_name === name.toUpperCase();
}

console.log("Posição do Alexandre:", buscaSequencialObj(objNomes, compararNome, "Alexandre"));