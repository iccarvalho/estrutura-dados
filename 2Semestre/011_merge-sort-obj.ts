function mergeSortObj<T>(arr: T[], fnComp: (elem1: T, elem2: T) => boolean) {
    //condição de saída
    if (arr.length < 2) return arr;
  
    let mid = Math.floor(arr.length / 2);
  
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
  
    //chamadas recursivas
    leftArr = mergeSortObj(leftArr, fnComp);
    rightArr = mergeSortObj(rightArr, fnComp);
  
    //mesclagem ordenada de vetEsq com vetDir
  
    let leftPos = 0, rightPos = 0, resArr: T[] = [];
  
    while (leftPos < leftArr.length && rightPos < rightArr.length) {
      if (fnComp(rightArr[rightPos], leftArr[leftPos])) {
        resArr.push(leftArr[leftPos]);
        leftPos++;
      } else {
        resArr.push(rightArr[rightPos]);
        rightPos++;
      }
    }
  
    let rest: T[];
    if (leftPos < rightPos) {
      rest = leftArr.slice(leftPos);
    } else {
      rest = rightArr.slice(rightPos);
    }
  
    return [...resArr, ...rest];
  }

import { objMotoristas } from "./data/motoristas-obj-desord";

type ObjMotoristasType = {
    razao_social: string,
    cnpj: string,
    nome_motorista: string,
    cpf: string,
    vigencia_do_cadastro: string
};

let objMotoristasOrd = mergeSortObj(objMotoristas, (elem1: ObjMotoristasType, elem2: ObjMotoristasType) => {
    return elem1.nome_motorista > elem2.nome_motorista;
});
  
console.log(objMotoristasOrd);