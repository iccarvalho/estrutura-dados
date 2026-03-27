class Node {
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    #head;
    #tail;
    #count;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count;
    }

    // Método privado que encontra um nó por sua posição
    #findNode(index){
        let node;

        if(index < (this.#count / 2)){ // Nó encontra-se na primeira metade da lista
            node = this.#head;

            for(let i = 0; i < index; i++){
                node = node.next;
            }
        } else{ // Nó encontra-se na segunda metade da lista
            node = this.#tail;

            for(let i = this.#count - 1; i > index; i--){
                node = node.prev;
            }
        }
        return node;
    }

    // Método de inserção em qualquer posíção
    insert(index, value){
        let node = new Node(value);

        if(this.isEmpty){ // 1º caso: lista vazia
            this.#head = node;
            this.#tail = node;
        } else if(index === 0){ // 2º inserção na primeira posição
            node.next = this.#head;
            this.#head.prev = node;
            this.#head = node;
        } else if(index >= this.#count){ // 3º caso: inserção na última posição
            node.prev = this.#tail;
            this.#tail = node;
            this.#tail = node;
        } else { // 4º caso: inserção em posição intermediária
            let indexNode = this.#findNode(index);
            let before = indexNode.prev;
            
            before.next = node;
            node.prev = before;
            node.next = indexNode;
            indexNode.prev = node;
        }

        this.#count++
    }

    // Método para inserção na primeira posição (atalho)
    insertHead(value){
        this.insert(0, value);
    }

    // Método para inserção na última posição (atalho)
    insertTail(value){
        this.insert(this.#count, value);
    }

    // Método para remover um nó da lista
    remove(index){
        if(this.isEmpty || index < 0 || index > this.#count - 1){ // 1º caso: lista vazia ou índice fora dos limites
            return undefined;
        }
        
        let removed;
        if(index === 0){ // 2º caso: remoção do primeiro nó
            removed = this.#head;
            this.#head = removed.next;
            
            if(this.#head){
                this.#head.prev = null;
            }

            if(this.#count === 1){
                this.#tail = null;
            }
        } else if(index === this.#count -1){ // 3º caso: remoção do último nó
            removed = this.#tail;
            this.#tail = removed.prev;

            if(this.#tail){
                this.#tail.next = null;
            }

            if(this.#count === 1){
                this.#head = null;
            }
        } else { // 4º caso: remoção de um nó intermediário
            removed = this.#findNode(index);

            let before = removed.prev;
            let after = removed.next;

            before.next = after;
            after.prev = before;
        }

        this.#count--;
        return removed.data;
    }

    // Método para remoção da primeira posição (atalho)
    removeHead(){
        return this.remove(0);
    }

    // Método para remoção da última posição (atalho)
    removeTail(){
        return this.remove(this.#count - 1);
    }

    // Método para consultar o nó na posição informado
    peek(index){
        if(this.isEmpty || index < 0 || index > this.#count - 1){ // lista vazia ou índice fora dos limites
            return undefined;
        }

        return this.#findNode(index);
    }

    // Método para consultar a primeira posição (atalho)
    peekHead(){
        return this.peek(0);
    }


    // Método para consultar a última posição (atalho)
    peekTail(){
        return this.peek(this.#count - 1);
    }
}