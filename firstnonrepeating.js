function firstNonRepeatingLetter(string) {
  // Add your code here
    let x = string.split('')
    let y = []
    let cont = 0
    for(i of x){
        for(j of x){
            if(i == j || i.toUpperCase() == j || i.toLowerCase() == j){
                cont += 1
            }
        }
        if(cont == 1) y.push(i)
        cont = 0
    }
    if(y[0] == undefined) return ''
    return y[0]
}

console.log(firstNonRepeatingLetter('gG'))