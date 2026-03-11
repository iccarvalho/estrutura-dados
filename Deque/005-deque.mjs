import Deque from "../lib/deque.mjs";

const listaCompras = new Deque();

console.log(listaCompras.print());
console.log(`A lista está vazia? ${listaCompras.isEmpty ? "Sim" : "Não"}`);

// Produtos alimentícios -> início
listaCompras.insertFront("Arroz");
listaCompras.insertFront("Feijão");
listaCompras.insertFront("Macarrão");
listaCompras.insertFront("Sal");
console.log(listaCompras.print());

// Produtos de Higiene/Limpeza -> final
listaCompras.insertBack("Sabão em pó");
listaCompras.insertBack("Desodorante");
listaCompras.insertBack("Água sanitária");
console.log(listaCompras.print());

listaCompras.insertFront("Café");
listaCompras.insertFront("Açúcar");
console.log(listaCompras.print());

listaCompras.insertBack("Amaciante");
listaCompras.insertBack("Shampoo");
listaCompras.insertBack("Condicionador");
console.log(listaCompras.print());

const removidoInicio = listaCompras.removeFront();
console.log(`Item removido: ${removidoInicio}`);
console.log(listaCompras.print());

const removidoFinal = listaCompras.removeBack();
console.log(`Item removido: ${removidoFinal}`);
console.log(listaCompras.print());

const primeiro = listaCompras.peekFront();
const ultimo = listaCompras.peekBack();

console.log({primeiro, ultimo});