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
}