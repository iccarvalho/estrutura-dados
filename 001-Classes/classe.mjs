export default class formaGeometrica{
    // atributos privados em js

    #altura;
    #largura;
    #tipo;

    // get -> mostrar dado;
    // set -> definir dado;

    get altura(){
        return this.#altura;
    }

    get largura(){
        return this.#largura;
    }

    set altura(valor){
        if(typeof(valor) !== "number" || valor <= 0){
            throw new Error("ERRO: altura deve ser um número positivo!");
        }

        this.#altura = valor;
    }

    set largura(valor){
        if(typeof(valor) !== "number" || valor <= 0){
            throw new Error("ERRO: largura deve ser um número positivo!");
        }

        this.#largura = valor;
    }

    /*
    TIPO PODE SER:
        Retângulo
        Triângulo
        Elipse
    */

    set tipo(valor){
        if(!["R", "T", "E"].includes(valor.toUpperCase())){
            throw new Error("ERRO: tipo precisa ser (R, T ou E)");
        }

        this.#tipo = valor.toUpperCase();
    }

    calcArea(){
        switch(this.#tipo){
            case "R": // retângulo
                return this.#altura * this.#largura;
            case "T": // triângulo
                return (this.altura * this.#largura) / 2;
            case "E": // elipse
                return (this.#altura / 2) * (this.#largura / 2) * Math.PI;
            default:
                break;
        }
    }
}