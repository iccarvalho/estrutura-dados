// LIFO - Last In, First Out
// último elemento a ser inserido será o primeiro a ser removido

export default class Stack{
    #data;
    #historyData;

    constructor(){
        this.#data = [];
        this.#historyData = [];
    }

    // inserir dados
    push(valor){
        this.#data.push(valor);
    }

    // remover dados
    pop(){
        this.#historyData.push(this.peek());
        return this.#data.pop();
    }

    // mostrar o topo da pilha
    peek(){
        return this.#data[this.#data.length - 1];
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    print(){
        return JSON.stringify(this.#data);
    }

    history(){
        return JSON.stringify(this.#historyData);
    }

}