import LinkedList from "./linkedList.mjs";

const lista = new LinkedList();

lista.insert(0, 6);
lista.insert(1, 35);
lista.insert(2, 10);
lista.insert(3, 2);
lista.insert(4, 15);
lista.insert(5, 1);
lista.insert(6, 20);
lista.insert(7, 99);
lista.insert(8, 87);

console.log(`Lista: ${lista.print()}`);

lista.reverse();

console.log(`Lista: ${lista.print()}`);