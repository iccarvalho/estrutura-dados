import Queue from '../lib/queue.mjs';

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

// implementação da busca em largura (BFS)
function bfs(grafo, inicio) {
    // o set é uma estrutura nativa do javascript (como se fosse um array)
    const visitados = new Set();

    const fila = new Queue();

    fila.enqueue(inicio);
    
    // Cria um laço que vai rodar enquanto a fila NÃO estiver vazia
    while(!fila.isEmpty) {
        // Remove o primeiro elemento da fila e guarda na variável 'node'
        const node = fila.dequeue();

        if(!visitados.has(node)) {
            console.log(node);
            visitados.add(node);
        }
    }
}