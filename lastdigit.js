var lastDigit = function(str1, str2){
    if(str2 == "0") return 1
    const value = parseInt(str1.charAt(str1.length - 1))
    let top = (str2/4)
    console.log(top.toString())
    let multiplier = (top - parseInt(top))*4
    let result = Math.pow(value,multiplier)
    result = result.toString()
    result = result.charAt(result.length - 1)
    return parseInt(result); // fix me
}

console.log(lastDigit("4", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))