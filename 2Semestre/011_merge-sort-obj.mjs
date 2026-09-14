function mergeSortObj(arr, fnComp) {
    //condição de saída
    if (arr.length < 2) return arr;
  
    let mid = Math.floor(arr.length / 2);
  
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
  
    //chamadas recursivas
    leftArr = mergeSortObj(leftArr, fnComp);
    rightArr = mergeSortObj(rightArr, fnComp);
  
    //mesclagem ordenada de vetEsq com vetDir
  
    let leftPos = 0, rightPos = 0, resArr= [];
  
    while (leftPos < leftArr.length && rightPos < rightArr.length) {
      if (fnComp(rightArr[rightPos], leftArr[leftPos])) {
        resArr.push(leftArr[leftPos]);
        leftPos++;
      } else {
        resArr.push(rightArr[rightPos]);
        rightPos++;
      }
    }
  
    let rest;
    if (leftPos < rightPos) {
      rest = leftArr.slice(leftPos);
    } else {
      rest = rightArr.slice(rightPos);
    }
  
    return [...resArr, ...rest];
  }

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

let objMotoristasOrd = mergeSortObj(objMotoristas, (elem1, elem2) => {
    return elem1.nome_motorista > elem2.nome_motorista;
});
  
console.log(objMotoristasOrd);