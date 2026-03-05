import Stack from "../lib/stack.mjs";

const frase = "Socorram-me, subi no ônibus em Marrocos";

const pilha = new Stack();

for(let i = 0; i < frase.length; i++){
    pilha.push(frase.charAt(i));
}

let reverso = "";

while(!pilha.isEmpty){
    reverso += pilha.pop();
}

console.log(reverso);