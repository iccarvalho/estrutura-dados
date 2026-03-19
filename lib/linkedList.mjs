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

        if(this.isEmpty){ // 1º caso: a lista está vazia
            this.#head = node;
            this.#tail = node;
        } else if(pos === 0){ // 2º caso: lista não vazia, inserção na primeira posição
            node.next = this.#head;
            this.#head = node;
        } else if(pos >= this.#count){ // 3º caso: inserção no final da lista
            this.#tail.next = node;
            this.#tail = node;
        } else{ // 4º caso: inserção numa posição intermediária
            let before = this.#head;

            for(let i = 1; i < pos; i++){
                before = before.next;
            }

            let after = before.next;

            node.next = after;
            before.next = node;
        }

    
        this.#count++
    }

    // Método para inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0, val);
    }

    // Método para inserção na última posição (atalho)
    insertTail(val){
        this.insert(this.count, val);
    }

    // Método para remoção de um nó da lista
    remove(pos){
        // 1º caso: lista vazia ou posição informada 
        if(this.isEmpty || pos < 0 || pos > this.#count -1){
            return undefined;
        }

        let removed;

        // 2º caso: remoção do node no início da lista
        if(pos === 0){
            removed = this.#head;
            this.#head = this.#head.next;

            if(this.#count === 1){
                this.#tail = null;
            }
        }

        // 3º caso: remoção do node intermediário ou final
        else{
            let before = this.#head;

            for(let i = 1; i < pos; i++){
                before = before.next;
            }

            removed = before.next;
            let after = removed.next;
            before.next = after;

            // atualiza o tail em caso de remoção
            if(pos === this.#count -1){
                this.#tail = before;
            }
        }

        this.#count--;

        return removed.data;
    }
}