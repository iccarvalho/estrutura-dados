// O(1) Constante; O elemento é acessado na primeira operação

function exemploConstante(arr){
    if(arr.length === 0) return -1;
    return arr[0];
}

const arr = [5,6,7,8,9,2,3,4];
console.log(exemploConstante(arr));

console.log("--------------------------------------");

// O(log n) logarítmico; A cada operação o valor de i é multiplicado por 2 o que signigic que o número de iterações necessárias para que i atinja (n) é logarítmica em relação a (n)

function exemploLogaritmico(n){
    let i = 1;
    while(i < n){
        console.log(i);
        i *= 2;
    }
}

exemploLogaritmico(5);

console.log("--------------------------------------");

// O(n) Linear; A função percore todos os elementos do array de uma vez, realizando uma operação costante para cada elemento

function exemploLinear(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

exemploLinear(arr);

console.log("--------------------------------------");

// O(n^2) Quadrático; A função contém um loop aninhado que percorrem todos os lementos do array, resultando em um número total de operações proporcional ao quadrado do tamanho do array

function exemploQuadratico(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i], arr[j]);
        }
    }
}

exemploQuadratico(arr);