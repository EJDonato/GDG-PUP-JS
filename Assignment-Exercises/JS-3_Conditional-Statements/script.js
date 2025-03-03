function checkAge() {
    // write your code here

    // get user input and the html element to display result
    const userAge = document.getElementById('ageInput').value;
    const outputHolder = document.getElementById("result");

    let ageCategory = getCategory(userAge);

    // checks the category and decides on what to display
    if (ageCategory == "Invalid") {
        outputHolder.innerText = "Invalid Age. Please enter a valid number.";
    }
    else if (ageCategory == "Old") {
        outputHolder.innerText = "fookin hel bruv, u old af";
    }
    else {
        outputHolder.innerText = ageCategory;
    }

}

// takes the ageInput and returns the fitting category
function getCategory(age) {
    if (age < 0 || isNaN(age)) {
        return "Invalid";
    }

    if (age <= 12) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else if (age <= 100) {
        return "Adult";
    }
    else if (age > 100) {
        return "Old";
    }
    else {
        return "Invalid";
    }
}
