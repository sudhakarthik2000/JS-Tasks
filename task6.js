// 1)length........
// function arrayLength(arr1){
// let res =arr1.push();
// console.log(res)
// }
// arrayLength([1,2,3,4,5])



// 2)  returning element in an array
// function getElementAtindex(arr2,index){
//     res = arr2.at(index)
//     console.log(res)
    

// }
// getElementAtindex([10,20,30,40,50],2)



// 3) push method
 

// let arr3 = [1,2,3]
// arr3.push(4)
// console.log(arr1)


// function addToArrayEnd(arr3,add){
// arr3.push(add)
// console.log(arr3)
// }
// addToArrayEnd([1,2,3],4)


// ----------------------------------


// 4) pop method 
// let arr = [1,2,3,4,5]
// arr.pop()
// console.log(arr)




// function removeLastElement(arr4){
//   arr4.pop()
//   console.log(arr4)
// }
// removeLastElement([1,2,3,4,5])


// --------------------------------- 


// 5)  using   swift method  

// let arr = [1,2,3,4,5]
//  arr.shift()
// console.log(arr)

// function removeFirstElement(arr5){
// arr5.shift()
// console.log(arr5)

// }
// removeFirstElement([1,2,3,4,5])
  
// ------------------------------------------ 


// // 6) add to array start 

// function addToArrayStart(arr6,value){

// res = arr6.unshift(value)
// console.log(arr6)
// }
// addToArrayStart([2,3,4,5],1)


// ------------------------------------ 
 
// 7) concat 2 arrays  
// let arr = [1,2,3]
// let arr1 = [4,5,6]
// let arr2 = arr.concat(arr1)
// console.log(arr2)

// function concatArrays(arr7,arr8){
//    res = arr7.concat(arr8)
//    console.log(res)

// }
// concatArrays([1,2,3],[4,5,6])

// ---------------------------- 

// 8)   flaten array 
// function flattenArray(arr9){
//   res = arr9.flat()
// console.log(res)

// } 
// flattenArray([[1,2],[3,4],[5,6]])



// 9)join  
// function joinArrayElements(arr10,join){
//     res = arr10.join(join)
//     console.log(res)

// }
// joinArrayElements(["apple","banana","orange"],",")


// 10) delete 

function deleteElement(arr,index){
      delete arr[2];
      console.log(arr)
  
}
deleteElement(["a","b","c","d","e"],2)


// 11) to string 
function arrayToString(arr11){
    let res = arr11.toString();
    return res;

}
console.log(arrayToString([1,2,3,4,5]))


// 12) is array 
function isArray(value){
res = Array.isArray(value)
console.log(res)   
}
isArray([1,2,3,4,5]) 
