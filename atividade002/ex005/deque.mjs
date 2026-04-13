// Deque - Double-Ended QUEue
// Permite inserção e remoção tanto pelo início quanto pelo fim

export default class Deque {
    #data;

    constructor(){
        this.#data = [];
    }

    // Método de inserção no início da estrutura
    insertFront(valor){
        try {
            if(this.#data.includes(valor)){
                throw new Error("Não é possível adicionar elementos duplicados!");
            }

            this.#data.unshift(valor);
        } catch (erro) {
            console.error(erro.name + ": " + erro.message);
        }
    }

    // Método de inserção no final da estrutura
    insertBack(valor){
        try {
            if(this.#data.includes(valor)){
                throw new Error("Não é possível adicionar elementos duplicados!");
            }
            
            this.#data.push(valor);
        } catch (erro) {
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

    get isEmpty(){
        return this.#data.length === 0;
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