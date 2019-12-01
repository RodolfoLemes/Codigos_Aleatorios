function tribonacci(signature, n) {
    let first = 0
    let second = 0
    let third = 0

    if(n == 0) return []
    if(n == 1) return signature[0]

    for(let i=0; i<(n-3); i++){
        first = signature[i]
        second = signature[i+1]
        third = signature[i+2]

        signature.push(first + second + third)
    }

    return signature
}

let sequence = tribonacci([1,1,1],10)
console.log(sequence)