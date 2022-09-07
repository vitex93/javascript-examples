//Returns max value element of given array

function maxElement(array){
    let maxValue = array[0]
    for(let i = 0; i < array.length; i++){
        if(maxValue < array[i]){
            maxValue = array[i]
        }
    }
    return maxValue
}
//console.log(maxElement([4, 7, 22, -2, 9, -1]))

//Returns object with min and max element from given array

function minMaxElement(array){
    let result = {
        "minValue": array[0],
        "maxValue": array[0]
    }
    for(let i = 0; i < array.length; i++){
        if(result.minValue > array[i]){
            result.minValue = array[i]
        }
        if(result.maxValue < array[i]){
            result.maxValue = array[i]
        }
    }
    return result
}

//console.log(minMaxElement([4, 7, 22, -2, 9, -1]))


//Returns average value of array elements

function averageValue(array){
    let sumValue = 0
    for(let i = 0; i < array.length; i++){
        sumValue = sumValue + array[i]
    }
    return sumValue / array.length
}
//console.log(averageValue([1, 2, 3]))

//Returns string with max number of characters

function longestString(array){
    let longest = array[0]
    for(let i = 0; i < array.length; i++){
        if(longest.length < array[i].length){
            longest = array[i]
        }
    }
    return longest
}
//console.log(longestString(["Mio", "Darko", "Dragoslav"]))

//Returns sum of array numbers

function sumValue(array){
    let sumNumber = 0
    for(let i = 0; i < array.length; i++){
        sumNumber = sumNumber + array[i]
    }
    return sumNumber
}
//console.log(sumValue([4, 7, 22, -2, 9, -1]))

//Returns employee with highest salary

function maxSalary(array){
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        if(max.salary < array[i].salary){
            max = array[i]
        }
    }
    return max
}
let employees = [
    {
        id: 1,
        firstName: "Marko",
        lastName: "Vasic",
        role: "manager",
        salary: 500
    },
    {
        id: 2,
        firstName: "Dusan",
        lastName: "Kovacevic",
        role: "Accountant",
        salary: 650
    },
    {
        id: 3,
        firstName: "Nikola",
        lastName: "Stankovic",
        role: "Operator",
        salary: 900
    },
    {
        id: 4,
        firstName: "Vladimir",
        lastName: "Petrovic",
        role: "Supervisor",
        salary: 600
    },
    {
        id: 5,
        firstName: "Petar",
        lastName: "Milivojevic",
        role: "Assistant",
        salary: 750
    }
]
//console.log(maxSalary(employees))

//Returns employee with lowest salary

function minSalary(array){
    let min = array[0]
    for(let i = 0; i < array.length; i++){
        if(min.salary > array[i].salary){
            min = array[i]
        }
    }
    return min
}
console.log(minSalary(employees))

/**
 * Returns average salary of employees
 * 
 * @param {*} array - array of employees
 * @returns average salary
 */
function averageSalary(array){
    let sumSalary = 0
    for(let i = 0; i < array.length; i++){
        sumSalary = sumSalary + array[i].salary
    }
    return sumSalary / array.length
}
//console.log(averageSalary(employees))




