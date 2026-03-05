import Stack from "../lib/stack.mjs";

const pilha = new Stack();

console.log(pilha.print());
console.log(`Pilha está vazia? ${pilha.isEmpty}`);

pilha.push(5);
pilha.push(99);
pilha.push(27);
pilha.push(1);

console.log(pilha.print());
console.log(`Pilha está vazia? ${pilha.isEmpty}`);

const removido = pilha.pop();
console.log(`Item removido: ${removido}`);
console.log(pilha.print());

let ultimo = pilha.peek();
console.log(`útlimo item: ${ultimo}`);
console.log(pilha.print());