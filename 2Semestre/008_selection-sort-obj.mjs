let pass, comps, changes;

function selectionSortObj(arr, fnComp) {
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

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

selectionSortObj(objMotoristas, (elem1, elem2) => {
    return elem1.nome_motorista > elem2.nome_motorista;
});

console.log(objMotoristas);
