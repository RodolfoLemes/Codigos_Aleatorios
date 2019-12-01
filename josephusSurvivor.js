function josephusSurvivor(n, k) {
    let arr = createArray(n)
    let x = k - 1
    while(arr.length != 1) {
        if(x >= arr.length) {
            x = x - arr.length
            let rest = arr.splice(x, 1)
            if(rest.length == 0){
                continue
            } else {
                x = x + (k-1)
            }
            
        } else {
            arr.splice(x, 1)
            x = x + (k-1)
        }
    }
    return arr[0]
}

createArray = n => {
    arr = []
    for(let i=0; i<n; i++) {
        arr.push(i+1)
    }
    return arr
}

josephusSurvivor(7, 3)