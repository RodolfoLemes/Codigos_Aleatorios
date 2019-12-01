function snail(array) {
    let arr = []
    let n = parseInt((array.length/2))
    for(let x=0; x<=n;x++) {
        for(let i=x; i<array.length-x; i++) {
            arr.push(array[x][i])
            if(i == array.length-x-1){
                for(let j=x+1; j<array.length-x; j++) {
                    arr.push(array[j][array.length-x-1])
                    if(j == array.length-x-1) {
                        for(let k=j-1; k>=x; k--) {
                            arr.push(array[array.length-x-1][k])
                            if(k == x) {
                                for(let t=array.length-2-x; t>x; t--){
                                    arr.push(array[t][x])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return arr
}

let array = [[1,2,3],
            [4,5,6],
            [7,8,9]]
let y = [[1,2,3,4],
        [2,2,5,6],
        [1,3,4,5],
        [0,2,3,4]]
let x = [[1,2,3,4,5],
        [2,2,5,6,6],
        [1,3,4,5,7],
        [0,2,3,4,8],
        [0,6,1,9,2]]

console.log(snail(y))
//snail(array) #=> [1,2,3,6,9,8,7,4,5]