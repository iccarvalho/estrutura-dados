import { objMotoristas } from "./data/motoristas-obj-desord.ts";


type ObjMotoristasType = {
    razao_social: string,
    cnpj: string,
    nome_motorista: string,
    cpf: string,
    vigencia_do_cadastro: string
};

let pass = 0, comps = 0, changes = 0;

function bubbleSortObj<T>(arr: T[], fnComp: (elem1: T, elem2: T) => boolean) {
    let swap: boolean;

    do {
        pass++;
        swap = false;

        for(let i = 0; i < arr.length - 1; i++) {
            comps++;
            if(fnComp(arr[i], arr[i+1])) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swap = true;
                changes++;
            }
        }

    } while(swap);
}

bubbleSortObj(objMotoristas, (elem1: ObjMotoristasType, elem2: ObjMotoristasType) => {
    return elem1.nome_motorista > elem2.nome_motorista
});

console.log(objMotoristas);
console.log({pass, comps, changes});