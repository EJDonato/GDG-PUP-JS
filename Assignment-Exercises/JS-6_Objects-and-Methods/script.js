// Step 1: Create a car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

// Step 2: Create a function to describe the car
function getDescription(object) {
    return `This car is a ${object.year} ${object.make} ${object.model}`
}

// Step 3: Call the function and display the result
console.log(getDescription(car))