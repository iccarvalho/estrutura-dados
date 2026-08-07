import { nomes } from "./data/vetor-nomes.ts";

function buscaBinaria<T>(arr: T[], value: T) {
    let start = 0;
    let end = arr.length - 1;

    while(end >= start) {
        let mid = Math.floor((start + end) / 2);

        if(value === arr[mid]) {
            return mid;
        } else if(value > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(`Posição de 99: ${buscaBinaria(nums, 99)}`);
console.log(`Posição de 99: ${buscaBinaria(nums, 99)}`);

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`);
console.log(`Posição de IGOR: ${buscaBinaria(nomes, "IGOR")}`);