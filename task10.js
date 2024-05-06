// 1) Take an arr = [1,2,3,4,5] print the array using array iteration methods  

let arr = [1,2,3,4,5]
arr.forEach((x,y,z)=>{
    console.log(x,y,z)

})

// --------------------------- 

// 2)  arr[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}];
// output:prashanth,teja 
// need to filter the array whose age is greater than 18



let arr2 = [
    { name: "prashnth", age: 20 },
    { name: "teja", age: 22 },
    { name: "shiva", age: 15 }
];
let filterarr = arr2.filter(person => person.age>18);
let names = filterarr.map(person=>person.name);
console.log(names.join(', '))


// --------------------------------  



// 3)  arr=[15,2,3,22,100] sort the array without using sort() method only using array iteration methods.
// output:[2,3,15,22,100]



// const arr = [15, 2, 3, 22, 100];

// // Bubble sort implementation
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             // Swap elements if they are in the wrong order
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// console.log(arr);






// using sort


let arr3 = [15,2,3,22,100];
let res3 = arr3.sort((a,b)=>a-b)
console.log(res3)

// ----------------------- 


//    4)arr=[1,2,3,4,5] sum of the array elements using reduce()
// output: 15

let arr4 = [1,2,3,4,5]
let sum = arr4.reduce((a,b)=>
    {
        return a+b
    },0)
    console.log(sum)

// --------------------------- 


// 5)arr ={13,67,31,45,11,10,77,88] check whether every element in the array is greater than 18 or not using every method perform the same input using some() method

let arr5 = [13,67,31,45,11,10,77,88]
let res = arr5.some((num => num >18))
console.log(res)



