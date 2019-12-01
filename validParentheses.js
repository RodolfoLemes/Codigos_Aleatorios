function validParentheses(parens){
    let arr = parens.split('')
    let cont = 0

    if(arr[arr.length - 1] == '(') return false 
    for(element of arr) {
        if(element == '('){
            cont = cont + 1
        } else {
            if(element == ')' && cont == 0) return false
            cont = cont - 1
        }
    }

    if(cont == 0) return true
    return false
}


console.log(validParentheses(")()()()("))