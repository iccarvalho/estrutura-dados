import LinkedList from "./linkedList.mjs";

const lista = new LinkedList();

lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item3");
lista.insertTail("Item4");
lista.insertTail("Item5");

console.log(`Lista atual: ${lista.print()}`);

const listaArray = lista.toArray();
console.log(listaArray);