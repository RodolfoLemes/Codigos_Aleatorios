let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

//  First, concatenate the strings, split then in to array and ordem them
//  After, filter the array to a new array comparing the element to the next element of the array
//  Finally, join the array, without space between them

function longest(a, b) {
    return a.concat(b).split('').sort().filter((element, index, array) => {
        if(element === array[index+1]){
            return false
        }
        return true
    }).join('')
}

console.log(longest(a,b))



/* Outras soluções:


function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
} Set é um array que só aceita valores unicos

/* let c = new Set(a.concat(b))

c = Array.from(c).sort().join("")

console.log(c) */

