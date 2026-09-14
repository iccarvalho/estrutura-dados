let pass = 0, comps = 0, changes = 0;

function bubbleSort(arr) {
    let swap;

    do {
        pass++;
        swap = false;
        
        for(let i = 0; i < arr.length -1; i++) {
            comps++;
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
                swap = true;
                changes++;
            }
        }

    } while(swap)
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

bubbleSort(nums);
console.log(nums);
console.log({pass, comps, changes});