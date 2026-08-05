import Deque from "./deque.mjs";

const deque = new Deque();

deque.insertBack("Mouse");
deque.insertBack("Teclado");
deque.insertBack("Monitor");
deque.insertBack("Placa-mãe");
deque.insertBack("Fonte");

console.log(`Carrinho de compras: ${deque.print()}`);

deque.insertFront("Placa-mãe");
deque.insertBack("Teclado");

deque.insertFront("Memória RAM");
deque.insertBack("Processador");

console.log(`Carrinho de compras: ${deque.print()}`);