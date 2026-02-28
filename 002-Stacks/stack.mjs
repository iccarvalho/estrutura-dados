export default class Stack{
    #data;

    constructor(){
        this.#data = [];
    }

    // inserir dados
    push(valor){
        this.#data.push(valor);
    }

    // remover dados
    pop(){
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

}