let array1=[1,2,3,4,5]
let array2=[4,5,6,7]
array1.forEach(data => {
array2.splice(array2.indexOf(data), 1)
})
