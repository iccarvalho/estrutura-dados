import HashTable from "./lib/HashTable.mjs";

const t = new HashTable();
const cenario = (n, titulo) => console.log(`\n=== Cenário ${n}: ${titulo}`);

cenario(1, 'set("Ana", 8) em balde vazio');
t.set("Ana", 8);
t.print();

cenario(2, 'set("Eva", 6) colide com Ana');
t.set("Eva", 6);
t.print();

cenario(3, 'set("Maria", 7) em outro balde');
t.set("Maria", 7);
t.print();

cenario(4, 'set("Pedro", 4) colide com Maria');
t.set("Pedro", 4);
t.print();

cenario(5, 'set("Ana", 9) atualiza, não duplica');
t.set("Ana", 9);
t.print();

cenario(6, 'get("Eva") segunda do balde 5');
console.log(`Valor de Eva: ${t.get("Ana")}`);

cenario(7, 'get("Zeca") balde vazio e get("Mel") balde cheio');
console.log(`Zeca: ${t.get("Zeca")}`);
console.log(`Mel: ${t.get("Mel")}`);

cenario(8, 'get("ana") minúsculo');
console.log(`ana: ${t.get("ana")}`);

cenario(9, 'delete("Ana") primeira do balde 5');
console.log(`Ana deletada? ${t.delete("Ana") ? "Sim" : "Não"}`);
t.print();

cenario(10, 'delete("Zeca") e delete("Mel") chaves ausentes');
console.log(`Zeca deletado? ${t.delete("Zeca") ? "Sim" : "Não"}`);
console.log(`mel deletada? ${t.delete("Mel") ? "Sim" : "Não"}`);
t.print();

cenario(11, 'set de valor 0 e undefined');
t.set("Zeca", 0);
t.set("Lia", undefined);
console.log(`Zeca: ${t.get("Zeca")}`);
console.log(`Lia: ${t.get("Lia")} | retornando valor undefined`);
console.log(`Mel: ${t.get("Mel")}`);
t.print();

cenario(12, 'rehash: 8 chaves e carga 0.73, depois 9 chaves');
t.set("Bia", 7);
t.set("Caio", 5);
t.set("Davi", 9);
console.log(`Antes: quantidade: ${t.quantidade} carga: ${(t.quantidade/t.tamanho).toFixed(2)}`);

t.set("Luca", 6);
console.log(`Depois: quantidade: ${t.quantidade} carga: ${(t.quantidade/t.tamanho).toFixed(2)}`);
t.print();