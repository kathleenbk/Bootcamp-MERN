for (var i=1; i<=100; i++) {
    //fizzbuzz
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }
    //fizz
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    //buzz
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    //other numbers
    else {
        console.log(i);
    }
}