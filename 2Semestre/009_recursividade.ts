function fatorial(n: number) {
    let result = 1;

    for (let i = n; i > 1; i--) {
        result*= i;
    }

    return result;
}

console.log(fatorial(5));

function fatorialRecursivo(n: number) {
    if (n <= 1) {
        return 1;
    }

    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));