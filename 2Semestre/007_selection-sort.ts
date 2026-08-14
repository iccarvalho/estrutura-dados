let pass: number, comps: number, changes: number;

function selectionSort<T>(arr: T[]) {
    pass = 0, comps = 0, changes = 0;

    for(let selected = 0; selected < arr.length - 1; selected++) {
        pass++;
        let lowerPos = selected + 1;

        for(let i = lowerPos + 1; i < arr.length; i++) {
            if(arr[lowerPos] > arr[i]) lowerPos = i;
            comps++;
        }

        if(arr[selected] > arr[lowerPos]) {
            [arr[selected], arr[lowerPos]] = [arr[lowerPos], arr[selected]];
            changes++
        }
        comps++;
    }

    console.log({pass, comps, changes});
}

let numbers = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

selectionSort(numbers);
console.log(numbers);

import { nomes } from "./data/nomes-desord.ts";

selectionSort(nomes);
console.log(nomes);
