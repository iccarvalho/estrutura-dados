import Stack from "./stack.mjs";

const stack = new Stack(3);

stack.push("Digitar Olá Mundo!");
stack.push("Aplicar negrito");
stack.push("Aplicar itálico");

console.log(`Histórico de ações: ${stack.print()}`);

stack.push("Aplicar sublinhado");

stack.maxLength = 5;

console.log(`Ação desfeita: ${stack.pop()}`);

stack.push("Aumentar a fonte");
stack.push("Mudar cor de fundo");
stack.push("Mudar cor da fonte");

console.log(`Histórico de ações: ${stack.print()}`);