// let str = "      hello     ytyytt ";
// let str1 = "world";
// console.log(str.trimEnd())
// console.log(str1[str1.length-1])
// console.log(str.toUpperCase())
// console.log(str2=str.concat(str1));
// console.log(str2) 
//   console.log(str1.length-1)
// console.log(str1[str1.length-1])






// accesing strings using 3 methods 
//  1) array Notification.
//  2) at
//  3) Charat  
//  length,concat,trim,trimstart,trimend,touppercase,tolowercase;


// let str = "we\"lco\"m\"e";

// console.log(str)







// let str = "hElLo WorLD";
// let str1 = "HeLlO wORld";
// console.log(str1.toUpperCase())








// task 1.


// let str = "hElLo WorLD"
// let str1 = ""
// for(i = 0;i<str.length;i++){
// if(str[i]>= "A" && str[i]<= "Z"){
//     str1 = str1+ str[i].toLowerCase();
// }   
// else if(str[i]>= "a" && str[i]<= "z"){
//     str1 = str1+str[i].toUpperCase();

// }


// }
// console.log(str1);



// task2



let str = "hello world"
count = 0;
count1 = 0;
for(i = 0;i<str.length;i++){
if( str[i] == 'a' || str[i] == 'A'){
    count++;

}   
 else if(str[i] == 'e' || str[i] == 'E') {
    count++
 }
 else if(str[i] == 'i' || str[i] == 'I') {
    count++
 }
 else if(str[i] == 'o' || str[i] == 'O') {
    count++
 }
 else if(str[i] == 'u' || str[i] == 'U') {
    count++
 }
 else{
    count1++

 }

}
console.log(`number of vowels ${count}\nnumber of consonants ${count1}`)














    
    

