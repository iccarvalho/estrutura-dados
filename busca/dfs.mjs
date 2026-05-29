import Stack from "../lib/stack.mjs";

const grafo = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};

// Implementação da busca em Profundidade (DFS)
function dfs(grafo, inicio) {
  const visitados = new Set();

  // Cria uma nova instância da pilha
  const pilha = new Stack();

  pilha.push(inicio);

  while (!pilha.isEmpty) {
    const node = pilha.pop();

    if (!visitados.has(node)) {
      console.log(node);
      visitados.add(node);
    }

    // Guarda o array de vizino do node atual em uma variável
    const vizinho = grafo[node];

    for (let i = vizinho.length - 1; i >= 0; i--) {
      if (!visitados.has(vizinho[i])) {
        pilha.push(vizinho[i]);
      }
    }
  }
}

dfs(grafo, "A");
