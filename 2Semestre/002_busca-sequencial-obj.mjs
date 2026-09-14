import { objNomes } from "./data/vetor-obj-nomes.mjs";

function buscaSequencialObj(arr, fnComp) {
    for(let i = 0; i < arr.length; i++) {
        if(fnComp(arr[i], name)) return i;
    }

    return -1;
}

function compararNome(obj, name) {
    return obj.first_name === name.toUpperCase();
}

console.log("Posição do Alexandre:", buscaSequencialObj(objNomes, compararNome, "Alexandre"));