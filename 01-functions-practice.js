//STEP 1
// Function to halve a number
function halfNumber() {
    let num = parseFloat(prompt("Enter a number to halve:"));
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}
//STEP 2
// Function to square a number
function squareNumber() {
    let num = parseFloat(prompt("Enter a number to square:"));
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}
//STEP 3
// Function to calculate percentage
function percentOf() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}
//STEP 4
// Function to find modulus
function findModulus() {
    let num1 = parseFloat(prompt("Enter the first number (divisor):"));
    let num2 = parseFloat(prompt("Enter the second number (dividend):"));
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

// Call the functions to take user input
halfNumber();
squareNumber();
percentOf();
findModulus();






