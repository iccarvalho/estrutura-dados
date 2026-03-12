class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {
    #head // (cabeça) início da lista
    #tail // (cauda) final da lista
    #count // qtde de nós da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    // Getter que retorna se a lista está vazia
    get isEmpty(){
        return this.#count === 0;
    }

    // Getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count;
    }

    // Método para inserir em qualquer posição
    insert(pos, val){
        // cria o nó para armazenar o valor pretendido
        const node = new Node(val);

        if(this.isEmpty){ // 1º casp: a lista está vazia
            this.#head = node;
            this.#tail = node;
        } else if(pos === 0){ // 2º caso: lista não vazia, inserção na primeira posição
            node.next = this.#head;
            this.#head = node;
        } else if(pos >= this.#count){ // 3º caso: inserção no final da lista
            this.#tail.next = node;
            this.#tail = node;
        }

        this.#count++
    }
}