import { employees } from './../employees.js'

//Removes element from array at given index

function deleteElement(array, i){
    array.splice(i, 1)
}
let numbers = [2, 5, 22, 26, 30]
deleteElement(numbers, 2)

//Removes n elements from index at given array

function deleteElements(array, i, n){
    array.splice(i, n)
}

deleteElements(numbers, 1, 2)

//Increase salary for employees with given indexes

function salaryIncrease(array, indexes, amount){
    for(let i = 0; i < indexes.length; i++){
        let index = indexes[i]
        array[index].salary += amount
    }
}
salaryIncrease(employees, [1, 3], 100)
//console.log(employees)

//Count and returns negative numbers from given array

function countNegatives(array){
    let counter = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            counter += +1
        }
    }
    return counter
}
//console.log(countNegatives([2, 2, 22, -26, 30, 0, -1]))

//Returns index of element in array or returns -1 if not exist

function searchElement(array, n){
    for(let i = 0; i < array.length; i++){
        if(array[i] == n)
            return i
    }
    return -1
}
//console.log(searchElement([2, 2, 22, -26, 30, 0, -1], 30))

//Returns sum of numbers from given interval in array

function countSum(array, i1, i2){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        if(i >= i1 && i <= i2)
            sum += array[i]
    }
    return sum
}

function countSum2(array, i1, i2){
    let sum = 0
    for(let i = i1; i < i2; i++){
        sum += array[i]
    }
    return sum
}

/**
 * 
 * @param {*} array 
 * @returns Average value of positive numbers from array
 */

function averageOfPositiveNumbers(array){
    let sumNumbers = 0
    let countNumber = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            sumNumbers += array[i]
            countNumber++
        }
    }
    return sumNumbers / countNumber
}
//console.log(averageOfPositiveNumbers([2, -3, 5, -6, 0]))





