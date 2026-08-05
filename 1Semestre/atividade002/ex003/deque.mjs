// Deque - Double-Ended QUEue
// Permite inserção e remoção tanto pelo início quanto pelo fim

export default class Deque {
    #data;
    #maxLength;

    constructor(maxLength){
        this.#data = [];

        
        if(!Number.isInteger(maxLength) || maxLength < 0){
            throw new TypeError("A capacidade máxima deve ser um número inteiro positivo!");
        }
            
        this.#maxLength = maxLength;
    }

    // Método de inserção no início da estrutura
    insertFront(valor){
        try{
            if(this.#data.length === this.#maxLength){
                throw new Error("Limite máximo de elementos atingido!");
            }

            this.#data.unshift(valor);
        } catch(erro){
            console.error(erro.name + ": " + erro.message);
        }
    }

    // Método de inserção no final da estrutura
    insertBack(valor){
        try{
            if(this.#data.length === this.#maxLength){
                throw new Error("Limite máximo de elementos atingido!");
            }
        
            this.#data.push(valor);
        } catch(erro){
            console.error(erro.name + ": " + erro.message);
        }
    }

    // Método de remoção pelo início da estrutura
    removeFront(){
        return this.#data.shift();
    }

    // Método de remoção pelo final da estrutura
    removeBack(){
        return this.#data.pop();
    }

    // Método para consultar o início da estrutura
    peekFront(){
        return this.#data[0];
    }

    // Método para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1];
    }

    set maxLength(newMaxLength){
        try {
            if(!Number.isInteger(newMaxLength) || newMaxLength < 0){
                throw new TypeError("A capacidade máxima deve ser um número inteiro positivo!");
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

    // Mostrar a estrutura completa para fins de depuração
    print() {
    let output = "[ ";

    for(let i = 0; i < this.#data.length; i++) {
        if (output !== "[ ") {
        output += ", ";
        }
        output += `${i+1}º: ${this.#data[i]}`;
    }
    return output + " ]";
    }
}