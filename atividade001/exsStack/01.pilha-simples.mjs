/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/

import Stack from "../../lib/stack.mjs";

const pilha = new Stack();
console.log(pilha.print()); // inicialmente vazia

pilha.push(5); // adiciona o elemento 5 ao final da pilha
console.log(pilha.print()); // [5]

pilha.push(9); // adiciona o elemento 9 ao final da pilha
console.log(pilha.print()); // [5, 9]

pilha.pop(); // remove o elemento 9 da pilha
console.log(pilha.print()); // [5]

pilha.push(3); // adiciona o elemento 3 ao final da pilha
console.log(pilha.print()); // [5, 3]

pilha.push(8); // adiciona o elemento 8 ao final da pilha
console.log(pilha.print()); // [5, 8, 3] 

pilha.pop(); // rempove o elemento 8 da pilha
console.log(pilha.print()); // [5, 3]

pilha.pop(); // remove o elemento 3 da pilha
console.log(pilha.print()); // [5]

pilha.push(6); // adiciona o elemento 6 ao final da pilha
console.log(pilha.print()); // [5, 6]

pilha.push(); // adiciona o elemento null ao final da pilha
console.log(pilha.print()); // [5, 6, null]

pilha.push(2); // adiciona o elemento 2 ao final da pilha
console.log(pilha.print()); // [5, 6, null, 2]

pilha.pop(); // remove o elemento 2 da pilha
console.log(pilha.print()); // [5. 6, null]

pilha.push(10); // adiciona o elemento 10 ao final da pilha
console.log(pilha.print()); // [5, 6, null, 10]

pilha.push(1); // adiciona o elemento 1 ao final da pilha
console.log(pilha.print()); // [5, 6, null, 10, 1]

pilha.pop(); // remove o elemento 1 da pilha
console.log(pilha.print()); // [5, 6, null, 10]

pilha.pop(); // rmeove o elemento 10 da pilha
console.log(pilha.print()); // [5, 6, null]

pilha.push(15); // adiciona o elemento 15 ao final da pilha
console.log(pilha.print()); // [5, 6, null 15]

pilha.pop(); // remove o elemento 15 da pilha
console.log(pilha.print()); // [5, 6, null]

pilha.pop(); // remove o elemento null da pilha
console.log(pilha.print()); // [5, 6]