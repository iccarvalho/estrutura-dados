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

    // Método para remover o primeiro nó da lista (atalho)
    removeHead(){
        return this.remove(0);
    }

    // Método para remover o último nó da lista (atalho)
    removeTail(){
        return this.remove(this.#count -1);
    }

    // Método para buscar um valor na lista e retornar sua posição
    indexOf(val){
        // 1º caso: lista vazia
        if(this.isEmpty){
            return -1;
        } 

        let node = this.#head;
        for(let i = 0; i < this.#count; i++){
            if(node.data === val){
                return i;
            }
            node = node.next;
        }
        return -1;
    }

    // Método para retornar o valor na posição informada
    peek(pos){
        // 1º caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count -1){
            return undefined;
        }

        // 2º caso: busca sequencial
        let node = this.#head;
        for(let i = 0; i < pos; i++){
            node = node.next;
        }
        return node.data;
    }

    // Método para retornar o valor da nó inicial (atalho)
    peekHead(){
        return this.peek(0);
    }

    // Método para retornar o valor do último nó (atalho)
    peekTail(){
        return this.peek(this.#count -1);
    }

    countOccurrences(value){
        let node = this.#head;
        let occurrences = 0;

        for(let i = 0; i < this.#count; i++){
            if(node.data === value){
                occurrences++;
            }

            node = node.next;
        }

        return occurrences;
    }

    print(){
        let output = "( ";
        let node = this.#head;

        for(let i = 0; i < this.#count; i++){
            if(output !== "( "){
                output += ", ";
            }

            output += `[${i}]: ${node.data}`;
            node = node.next;
        }
        output += ` ) count: ${this.#count}`;

        return output;
    }
}