import LinkedList from "./linkedList.mjs";

const lista = new LinkedList();

lista.insertTail("Item1");
lista.insertTail("Item2");
lista.insertTail("Item1");
lista.insertTail("Item3");
lista.insertTail("Item1");

console.log(`Lista atual: ${lista.print()}`);

console.log(`Ocorrências de 'Item1': ${lista.countOccurrences("Item1")}`);
console.log(`Ocorrências de 'Item2': ${lista.countOccurrences("Item2")}`);