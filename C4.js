// js code for removing array of element from array
// for example we have array1 and array2 given as below 
// now we need to remove all element of array 2 from array1 
// then this might be helpful using es6
// it gives new array of [1,2,3] for given below case

let array1=[1,2,3,4,5]
let array2=[4,5,6,7]
array1.forEach(data => {
array2.splice(array2.indexOf(data), 1)
})
