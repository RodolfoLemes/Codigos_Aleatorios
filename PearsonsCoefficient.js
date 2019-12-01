const X = [14,16,27,42,39,50,83]
const Y = [2,5,7,9,10,13,20]
var denominador = 0
var dividendoX = 0
var dividendoY = 0

function mean(x, y){
    let meanX = x.reduce((cont, element) => cont + element)
    meanX = meanX / x.length
    let meanY = y.reduce((cont, element) => cont + element)
    meanY = meanY / y.length

    return [meanX, meanY]
}

const meanArray = mean(X, Y)

for(i in X){
    denominador = denominador + (X[i] - meanArray[0])*(Y[i] - meanArray[1])
    dividendoX = dividendoX + Math.pow((X[i] - meanArray[0]), 2)
    dividendoY = dividendoY + Math.pow((Y[i] - meanArray[1]), 2)
}

const r = denominador / (Math.sqrt(dividendoX * dividendoY))

console.log(parseFloat(r.toFixed(4)))