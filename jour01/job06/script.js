function fizzbuzz() {
    let fizzbuzznumbers = [];
    // Create an array of numbers from 1 to 151
    for (let i = 1; i <= 151; i++) {
        fizzbuzznumbers.push(i);
    }
    // Loop through the array and print Fizz if the number is divisible by 3, Buzz if the number is divisible by 5, and FizzBuzz if the number is divisible by both 3 and 5
    for (let i = 0; i < fizzbuzznumbers.length; i++) {
        if (fizzbuzznumbers[i] % 3 === 0 && fizzbuzznumbers[i] % 5 === 0) {
            console.log("FizzBuzz");
        } else if (fizzbuzznumbers[i] % 3 === 0) {
            console.log("Fizz");
        } else if (fizzbuzznumbers[i] % 5 === 0) {
            console.log("Buzz");
        }
        console.log(fizzbuzznumbers[i]);
    }
}

fizzbuzz();