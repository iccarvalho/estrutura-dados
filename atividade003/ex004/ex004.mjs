import LinkedList from "./linkedList.mjs";

const lista = new LinkedList();

lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item1");
lista.insertTail("Item3");
lista.insertTail("Item1");

console.log(`Lista antes da remoção de 'Item1': ${lista.print()}`);

lista.removeAll("Item1");

console.log(`Lista após a remoção de 'Item1': ${lista.print()}`);