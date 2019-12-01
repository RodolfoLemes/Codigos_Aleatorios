/* Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value next to each 
other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = (iterable) => {
    //  First of all, separate type string and objects
    //  So, if a string split them in to array and filter them, comparing the element to the next element of the array
    //  If the type is object just filter them

    if(typeof(iterable) === "string"){
        arr = iterable.split("").filter((element, index, array) => element === array[index+1] ? false : true)
        return arr
    } else {
        arr = iterable.filter((element, index, array) => element === array[index+1] ? false : true)
        return arr
    }
}

let result = uniqueInOrder('AAAABBBCCDAABBB')
let result1 = uniqueInOrder('ABBCcAD') 
let result2 = uniqueInOrder([1,2,2,3,3])
console.log(result, result1, result2)