/* function scramble(str1, str2) {
    let x = str1.split('')
    let y = str2.split('')
    let test = []
    if(x.length <= y.length){
        for(index in x) {
            for(i in y) {
                if(x[index] === y[i]){
                    y[i] = undefined
                    test.push(x[index])
                    break
                }
                if(i == y.length-1 && test.length != index+1) return false
            }
        }
        return true
    } else {
        for(index in y) {
            for(i in x) {
                if(y[index] === x[i]){
                    x[i] = undefined
                    test.push(y[index])
                    break
                }
                if(i == x.length-1 && test.length != index+1) return false
            }
        }
        return true
    }
} */

function scramble(str1, str2) {
    let x = str1.split('')
    let y = str2.split('')
    let test = 0
    if(x.length <= y.length){
        for(index in x) {
            for(i in y) {
                if(x[index] == y[i]){
                    y[i] = undefined
                    test = test + 1
                    break
                }
                if(i == y.length-1 && test != index+1) return false
            }
        }
        return true
    } else {
        for(index in y) {
            for(i in x) {
                if(y[index] == x[i]){
                    x[i] = undefined
                    test = test +1
                    break
                }
                if(i == x.length-1 && test != index+1) return false
            }
        }
        return true
    }
}

console.log(scramble('rkqodlw','world'))
console.log(scramble('jscripts','javascript'))
console.log(scramble('cedewaraaossoqqyt','codewars'))
console.log(scramble('katas','steak'))
console.log(scramble('scriptjava','javascript'))
console.log(scramble('scriptingjava','javascript'))
console.log(scramble('scriptsjava','javascripts'))
console.log(scramble('aabbcamaomsccdd','commas'))