// FIFO - First In, First Out
// Primeiro elemento a ser inserido será o primeiro a ser removido

export default class Queue{
    #data;
    #operationCount;

    constructor(){
        this.#data = [];
        this.#operationCount = 0;
    }

    // Inserir dados
    enqueue(valor){
        this.#data.push(valor);
        this.#operationCount++;
    }

    // Remover dados
    dequeue(){
        this.#operationCount++;
        return this.#data.shift();
    }

    // Consultar o ínicio da fila
    peek(){
        return this.#data[0];
    }
    
    // Verifica se a fila está vazia
    get isEmpty(){
        return this.#data.length === 0;
    }

    get operationCount(){
        return this.#operationCount;
    }

    // Mostrar a fila completa para fins de depuração
    print(){
        let output = "[ ";

        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `${i+1}: ${this.#data[i]}`;
        }
        output += " ]";
        
        return output;
    }
}