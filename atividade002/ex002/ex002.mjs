import Stack from "./stack.mjs";

const pilha = new Stack();

console.log(`Histório de navegação: ${pilha.history()}`);

pilha.push("google.com");
pilha.push("github.com");
pilha.push("netflix.com");
pilha.push("youtube.com");
pilha.push("br.pinterest.com");

pilha.pop();
pilha.pop();
pilha.pop();
console.log(`Histório de navegação: ${pilha.history()}`);
console.log(`Abas abertas: ${pilha.print()}`);
