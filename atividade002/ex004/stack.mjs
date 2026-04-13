// LIFO - Last In, First Out
// último elemento a ser inserido será o primeiro a ser removido

export default class Stack{
    #data;
    #maxLength;

    constructor(maxLength){
        this.#data = [];

        try {
            if(!Number.isInteger(maxLength) || maxLength < 0){
                throw new TypeError("A capacidade máxima deve ser um número inteiro positivo!");
            }

            this.#maxLength = maxLength;
        } catch (erro) {
            console.error(erro.name + ": " + erro.message);
        }
    }

    // inserir dados
    push(valor){
        try {
            if(this.#data.length === this.#maxLength){
                throw new Error("Capacidade máxima de elementos atingida!");
            }

            this.#data.push(valor);
        } catch (erro) {
            console.error(erro.name + ": " + erro.message);
        }
    }

    // remover dados
    pop(){
        return this.#data.pop();
    }

    // mostrar o topo da pilha
    peek(){
        return this.#data[this.#data.length - 1];
    }

    set maxLength(newMaxLength){
        try {
            if(!Number.isInteger(newMaxLength) || newMaxLength < 0){
                throw new TypeError("A capacidade máxima deve ser um número inteiro positivo!")
            }

            if(newMaxLength < this.#data.length){
                throw new Error("Capacidade não pode ser menor que o número atual de elementos!");
            }

            this.#maxLength = newMaxLength;
        } catch (erro) {
            console.error(erro.name + ": " + erro.message);
        }
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    get maxLength(){
        return this.#maxLength;
    }

    print(){
        return JSON.stringify(this.#data);
    }
}