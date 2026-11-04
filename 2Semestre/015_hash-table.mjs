class hashTable {
    constructor(tamanho = 11) {
        this.tamanho = tamanho;
        this.tabela = Array.from({ length: tamanho }, () => []);
        this.quantidade = 0;
    }

    #hash(key) {
        let h = 0;
        for(let i = 0; i < key.length ; i++) {
            h = (h * 31 + key.charCodeAt(i)) % this.length;
        }

        return h;
    }

    set(key, value) {
        const balde = this.table[this.#hash(key)];
        for(const par of balde) {
            if(par[0] === key) {
                par[1] = value;
                return;
            }
        }

        balde.push([key, value]);
        this.quantidade++;

        if(this.quantidade / this.tamanho > 0.75) this.#rehash();
    }

    get(key) {
        const balde =  this.tabela[this.#hash(key)];
        for(const [k, v] of balde) {
            if(k === key) {
                return v;
            }
        }
    }

    delete(key) {
        const balde = this.tabela[this.#hash(key)];
        const i = balde.findIndex(([k]) => k === key);

        if(i === -1) return false;

        balde.splice(i, 1);
        this.quantidade++;
        return true;
    }

    #rehash() {
        const antigo = this.tabela;
        this.tamanho = this.tamanho * 2 + 1;
        this.tabela = Array.from({ length: tamanho }, () => []);
        this.quantidade = 0;

        for(const balde of antigo) {
            for(const [k, v] of balde) {
                this.set(k, v);
            }
        }
    }
}