function removeSmallest(array) {
    let real = Array.from(array)
    let smallElement = real.sort((a, b) => a > b ? 1 : -1)[0]
    console.log(real)
    let index = array.indexOf(smallElement)
    array.splice(index, 1)
    return array
}

var arr = [290, 76, 76, 235, 321, 243, 247, 392]

var a = removeSmallest(arr)

console.log(a)

