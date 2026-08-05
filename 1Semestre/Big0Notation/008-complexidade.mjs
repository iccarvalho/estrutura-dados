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

console.log("--------------------------------------");

// Mediar a complexidade de O(n!) com recursão

function fatorial(n){
    const inicio = performance.now(); // ínicio da medição de tempo

    function fatorialRecursivo(num){
        if(num == 0) return 1;
        return num * fatorialRecursivo(num - 1);
    }
    const resultado = fatorialRecursivo(n);

    const fim = performance.now(); // Fim da medição de tempo

    const tempoGasto = fim - inicio;

    // memória estima usada pela pilha de chamadas (4 bytes por número inteiro)
    const memoriaPilhaMB = (n * 4) / (1024 * 1024);

    // memória real usada pelo processo
    let memoriaTotalMB = "N/A";
    if(typeof process !== 'undefined' && process.memoryUsage()){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
    }

    console.log("Análise de Complexidade Recursiva O(n!)");
    console.log(`Tamanho da entrada: ${n}`);
    console.log(`Resultado do fatorial: ${resultado}`);
    console.log(`Tempo de execução: ${tempoGasto.toFixed(3)} ms`);
    console.log(`Memória estimada da pilha de chamadas: ${memoriaPilhaMB} MB`);
    console.log(`Memória total usada pelo processo: ${typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(2) + " MB" : memoriaTotalMB}`);
    
}

fatorial(170);
