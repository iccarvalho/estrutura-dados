import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

let pass, comps, changes;

function bubbleSortObj(arr, fnComp) {
    pass = 0, comps = 0, changes = 0;
    let swap;

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

    console.log({pass, comps, changes});
}

bubbleSortObj(objMotoristas, (elem1, elem2) => {
    return elem1.nome_motorista > elem2.nome_motorista
});

console.log(objMotoristas);
