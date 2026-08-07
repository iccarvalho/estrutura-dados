const frutas = ["laranja", "maçã", "uva", "pera", "jabuticaba", "limão", "mamão", "tangerina"];
const numeros = [1, 5, 7, 10, 2, 34, 15];

function buscaSequencial<T>(arr: T[], value: T): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) return i;
    }

    return -1; // value não existe no array
}

console.log("Buscando tangerina: ", buscaSequencial(frutas, "tangerina"));
console.log("Buscando limão: ", buscaSequencial(frutas, "limão"));
console.log("Buscando morango: ", buscaSequencial(frutas, "morango"));
console.log("Buscando o número 5: ", buscaSequencial(numeros, 5));
console.log("Buscando o número 10: ", buscaSequencial(numeros, 10));
console.log("Buscando o número 17: ", buscaSequencial(numeros, 17));