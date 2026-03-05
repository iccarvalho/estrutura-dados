import Queue from "../lib/queue.mjs";

const fila = new Queue();

console.log(fila.print());
console.log(`Fila está vazia? ${fila.isEmpty ? "Sim" : "Não"}`);

// Inserção de dados
fila.enqueue("Igor");
fila.enqueue("Cauê");
fila.enqueue("Miguel");

console.log(fila.print());

const proximo = fila.peek();
console.log(`Próximo da fila: ${proximo}`)

const removido = fila.dequeue();
console.log(`Removido da fila: ${removido}`);

console.log(fila.print());