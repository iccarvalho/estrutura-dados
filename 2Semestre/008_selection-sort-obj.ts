let pass: number, comps: number, changes: number;

function selectionSortObj<T>(arr: T[], fnComp: (elem1: T, elem2: T) => boolean) {
    pass = 0, comps = 0, changes = 0;

    for(let selected = 0; selected < arr.length - 1; selected++) {
        pass++;

        let lowerPos = selected + 1;

        for(let i = lowerPos + 1; i < arr.length; i++) {
            if(fnComp(arr[lowerPos], arr[i])) lowerPos = i;
            comps++
        }

        if(fnComp(arr[selected], arr[lowerPos])) {
            [arr[selected], arr[lowerPos]] = [arr[lowerPos], arr[selected]];
            changes++
        }
        comps++;
    }

    console.log({pass, comps, changes});
}

import { objMotoristas } from "./data/motoristas-obj-desord.ts";

type ObjMotoristasType = {
    razao_social: string,
    cnpj: string,
    nome_motorista: string,
    cpf: string,
    vigencia_do_cadastro: string
};

selectionSortObj(objMotoristas, (elem1: ObjMotoristasType, elem2: ObjMotoristasType) => {
    return elem1.nome_motorista > elem2.nome_motorista;
});

console.log(objMotoristas);