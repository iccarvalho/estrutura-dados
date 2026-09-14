import { objNomes } from "./data/vetor-obj-nomes.mjs";

function buscaBinariaObj(arr, fnComp) {
    let start = 0;
    let end = arr.length -1;

    while(end >= start) {
        let mid = Math.floor((start + end) / 2);

        switch(fnComp(arr[mid], name)) {
            case 0:
                return mid;
            case 1:
                start = mid + 1;
                break;
            default:
                end = mid - 1;
                break;
        }
    }

    return -1;
}

function compararNome(midValue, searchValue = "ALEXANDRE") {
    if(searchValue === midValue.first_name) return 0;
    else if(searchValue > midValue.first_name) return 1;
    else return -1;
}

console.log(`Posição de ALEXANDRE: ${buscaBinariaObj(objNomes, compararNome)}`);
console.log(`Posição de IGOR: ${buscaBinariaObj(objNomes, compararNome, "IGOR")}`);