import LinkedList from "./linkedList.mjs";

const lista = new LinkedList();

lista.insert(0, "Item1");
lista.insert(1, "Item2");
lista.insert(2, "Item3");
lista.insert(3, "Item4");
lista.insert(4, "Item5");

console.log(`Lista atual: ${lista.print()}`);
console.log(`Histórico de remoções: ${lista.history() === "[  ]" ? "Nenhuma remoção ainda." : lista.history()}`);

lista.remove(1);
lista.remove(3);

console.log(`Lista após remoção: ${lista.print()}`);
console.log(`Histórico de remoções: ${lista.history() === "[  ]" ? "Nenhuma remoção ainda." : lista.history()}`);
