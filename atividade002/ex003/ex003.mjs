import Deque from "./deque.mjs";

const deque = new Deque(5);

console.log(deque.print());
console.log(`Deque está vazio? ${deque.isEmpty ? "Sim" : "Não"}`);

deque.insertBack(1);
deque.insertBack(2);
deque.insertBack(3);
deque.insertBack(4);
deque.insertBack(5);

console.log(deque.print());

deque.insertFront(0);
deque.insertBack(6);

deque.maxLength = 10;
console.log(deque.maxLength);

deque.insertFront(0);
deque.insertBack(6);

console.log(deque.print());

deque.maxLength = 3;
deque.maxLength = "20";
