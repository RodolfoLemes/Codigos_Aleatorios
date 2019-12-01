/* var sum_pairs = function(ints, s){
    let arr = []
    let index = []
    for(let i=0; i<ints.length; i++){
        for(let j=i+1; j<ints.length; j++){
            if(ints[i] + ints[j] == s) {
                arr.push([ints[i], ints[j]])
                index.push(j-i)
            }
        }
    }
    let minor = index.findIndex(element => element == Math.min(...index))
    return arr[minor]
} */
var sum_pairs=function(ints, s){
    if (ints.length < 2) return undefined; //not enough numbers for pair.
    let intSet = new Set()
    intSet.add(ints[0]);
    for (let i=1; i < ints.length; ++i){
      let needed = s-ints[i];
      if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
        return [needed,ints[i]];
      }
      intSet.add(ints[i]);//if not insert the number in set and continue.
    }
    return undefined;//No answer found
  }
console.log(sum_pairs([10, 5, 2, 2, 7, 5], 10))
