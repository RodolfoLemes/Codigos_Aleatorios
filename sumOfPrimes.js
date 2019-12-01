function findPrimes(max) {
    const array = []
    let cont = 0;
    for(let i=0; i<max; i++) {
        for(let j=0; j<i; j++) {
            if(i%j == 0) {
                cont++
            }
            if(cont > 1) break;
        }
        if(cont == 1) array.push(i)
        cont = 0
    }
    return array
}

function primesFilter(array) {
    const next = []
    const filterArray = array.filter(element => {
        let ind = element.toString()
        let arr = ind.split('')
        let sum = arr.reduce((curr, next) => parseInt(curr) + parseInt(next))
        if(isPrime(sum)) {
            next.push(sum)
        }
        return false
    })
    return next
}

function isPrime(value) {
    let cont = 0
    for(let i=0; i<value; i++) {
        if(value%i == 0) cont ++
    }
    if(cont == 1) return true
    return false
}
const primes = findPrimes(1000)
const [a, b, c, d, ...rest] = primes
const primes2 = primesFilter(rest)
console.log(primes2)