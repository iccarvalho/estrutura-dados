import Queue from "./queue.mjs";

const fila = new Queue();

console.log(`A fila está vazia? ${fila.isEmpty ? "Sim": "Não"}`);
console.log(`Total de operações na fila: ${fila.operationCount}`);

fila.enqueue("João");
fila.enqueue("Pedro");
fila.enqueue("Lucas");
fila.enqueue("Miguel");

console.log(fila.print());

console.log(`A fila está vazia? ${fila.isEmpty ? "Sim": "Não"}`);
console.log(`Total de operações na fila: ${fila.operationCount}`);

fila.dequeue();
fila.dequeue();

console.log(fila.print());

console.log(`Total de operações na fila: ${fila.operationCount}`);


console.log(`Primeiro da fila: ${fila.peek()}`)
console.log(`Total de operações na fila: ${fila.operationCount}`);
