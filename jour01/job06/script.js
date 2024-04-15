function fizzbuzz() {
    let fizzbuzznumbers = [];
    for (let i = 1; i <= 151; i++) {
        fizzbuzznumbers.push(i);
    }
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