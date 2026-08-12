function bubbleSort(arr: number[]) {
    let swap: boolean;

    do {
        swap = false;
        
        for(let i = 0; i < arr.length -1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
                swap = true;
            }
        }

    } while(swap)
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

bubbleSort(nums);
console.log(nums);