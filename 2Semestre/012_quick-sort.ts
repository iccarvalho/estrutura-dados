let pass = 0, comps = 0, changes = 0;

function quickSort<T>(arr: T[], start = 0, end = arr.length - 1) {
  //só trabalhamos se a aregião do vetor tiver, pelo menos, 2 elementos
  if (end <= start) return; //condição de saída

  pass++
  const pivot = end; //pivot

  let div = start - 1; //divisor ded regiões(inicialmente, antes do início do vetor)

  for (let i = start; i < end; i++) {
    comps++
    if (arr[pivot] > arr[i]) {
      div++;
      if (div !== i) {
        [arr[i], arr[div]] = [arr[div], arr[i]];
        changes++
      }
    }
  }

  div++;
  //colocamos o pivô em seu lugar definitivo

  if (arr[div] > arr[pivot] && div !== pivot) {
    [arr[div], arr[pivot]] = [arr[pivot], arr[div]];
    changes++;
  }

  quickSort(arr, start, div - 1);
  quickSort(arr, div + 1, end);
}

let nums = [2, 5, 7, 1, 6, 3, 4];

quickSort(nums);

console.log(nums);

import {nomes} from "./data/nomes-desord";

quickSort(nomes);

console.log(nomes);
console.log({pass, comps, changes});