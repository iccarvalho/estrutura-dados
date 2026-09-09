let pass = 0, comps = 0, changes = 0; 

function quickSortObj<T>(arr: T[], fnComp: (elem1: T, elem2: T) => boolean, start = 0, end = arr.length - 1) {
    //só trabalhamos se a aregião do vetor tiver, pelo menos, 2 elementos
    if (end <= start) return; //condição de saída

    pass++
    const pivot = end; //pivot
  
    let div = start - 1; //divisor ded regiões(inicialmente, antes do início do vetor)
  
    for (let i = start; i < end; i++) {
      comps++
      if (fnComp(arr[pivot], arr[i])) {
        div++;
        if (div !== i) {
          [arr[i], arr[div]] = [arr[div], arr[i]];
          changes++
        }
      }
    }
  
    div++;
    //colocamos o pivô em seu lugar definitivo
  
    if (fnComp(arr[div], arr[pivot]) && div !== pivot) {
      [arr[div], arr[pivot]] = [arr[pivot], arr[div]];
      changes++;
    }
  
    quickSortObj(arr, fnComp, start, div - 1);
    quickSortObj(arr, fnComp, div + 1, end); 
}

import { objMotoristas } from "./data/motoristas-obj-desord";

type ObjMotoristasType = {
    razao_social: string,
    cnpj: string,
    nome_motorista: string,
    cpf: string,
    vigencia_do_cadastro: string
};

quickSortObj(objMotoristas, (elem1: ObjMotoristasType, elem2: ObjMotoristasType) => {
    if (elem1.razao_social !== elem2.razao_social) {
        return elem1.razao_social > elem2.razao_social;
    }
    return elem1.nome_motorista > elem2.nome_motorista;
});

console.log(objMotoristas);
console.log({pass, comps, changes});
