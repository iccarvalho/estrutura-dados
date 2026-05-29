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
    // o set é uma estrutura nativa do javascript (como se fosse um array), mas com duas regras:
    // Não permite elementos duplicados: Se você tentar adicionar o valor "A" 3 vezes, ele guarda apenas uma.
    // Busca instantânea: o método .has() desconbre se um elemento está lá desntro muito mais rápido do que fazer um indexOf ou includes
    const visitados = new Set();

    // Cria uma nova instância da fila
    const fila = new Queue();

    fila.enqueue(inicio);
    
    // Cria um laço que vai rodar enquanto a fila NÃO estiver vazia
    while(!fila.isEmpty) {
        // Remove o primeiro elemento da fila e guarda na variável 'node'
        const node = fila.dequeue();

        // O método .has() checa se o node NÃO está dentro do conjunto de visitados
        if(!visitados.has(node)) {
            console.log(node);
            visitados.add(node);

            // Percorre cada um dos vizinhos do node atual da lista de adjacencia do grafo
            for(const vizinho of grafo[node]) {
                // Checa se o vizinho em questão ainda NÃO foi visitado
                if(!visitados.has(vizinho)) {
                    // Se o vizinho não foi visitado, adiciona no conjunto de visitados
                    fila.enqueue(vizinho);
                }
            }
        }
    }
}

bfs(grafo, "A");