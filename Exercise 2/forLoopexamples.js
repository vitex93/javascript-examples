//Prints first two hundred numbers
/*
for (let i = 0; i < 201; i++) {
    console.log(i);
}
*/

//Prints each 5th number, from 0 to 500
/*
for (let i = 0; i <= 500; i=i+5) {
    console.log(i);
}
*/

//Prints elements of the array
/*
let numbers = [5, -1, 0, 88, 46, 54, 33]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
*/

//Print elements of array in reverse order
/*
let numbers = [15, 18, 67, 8, 61, 43, 90, -2456, -3]

for (let i = numbers.length-1; i >= 0; i--) {
    console.log(numbers[i]);
}
*/

//Print each 3rd element of array
/*
let numbers  = [51, 81, 72, 83, 631, -4443, 9650, 64, 7868, -90, 40, -23]

for (let i = 0; i < numbers.length; i = i+3) {
    console.log(numbers[i]); 
}
*/

//Print only positive numbers from array
/*
let numbers = [51, 81, 72, 83, 631, -4443, 9650, 64, 7868, -90, 40, -23]

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 0){
        console.log(numbers[i]); 
    }
}
*/

//Print absolute value of each element in array
/*
let numbers = [51, 81, 72, 83, 631, -4443, 9650, 64, 7868, -90, 40, -23]

for (let i = 0; i < numbers.length; i++) {
    //console.log(Math.abs(numbers[i]))
    if(numbers[i] >= 0){
        console.log(numbers[i]) 
    }
    else{
        console.log(-1 * numbers[i])
    }  
}
*/
//Print element with max value from the array
/*
let numbers = [15, 18, 67, 8, 61, 43, 90, -2456, -3]
let maxElement = numbers[0] 
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxElement){
        maxElement = numbers[i]
    }
}
console.log(maxElement)
*/

//Print element with max and min value from the array
/*
let numbers = [5, -1, 0, 88, 46, 54, 33]
let maxElement = numbers[0]
let minElement = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxElement){
        maxElement = numbers[i]
    }    
    if(numbers[i] < minElement){
        minElement = numbers[i]
    }
}
console.log(minElement + " " + maxElement)
*/