let students = [
    {
        index: 5,
        firstName: "Miodrag",
        lastName: "Vilotijevic",
        averageMark: "8.00"

    },
    {
        index: 8,
        firstName: "Darko",
        lastName: "Vitorovic",
        averageMark: "6.00"

    }
]

const studentTable = document.getElementById("students")

for(var i=0; i<students.length; i++){
    var row = studentTable.insertRow()
    var index = row.insertCell(0)
    var firstName = row.insertCell(1)
    var lastName = row.insertCell(2)
    var average = row.insertCell(3)

    index.innerHTML = students[i].index
    firstName.innerHTML = students[i].firstName
    lastName.innerHTML = students[i].lastName
    average.innerHTML = students[i].averageMark
    
}


