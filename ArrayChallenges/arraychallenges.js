// Challenge 1 : Always Hungry
function alwaysHungry(arr) {
    // your code here 
    var counter = 0;
    for (var i=0; i<arr.length; i++) {
        if(arr[i]==="food") {
            console.log("yummy");
            counter++;
            }
        }
    if(counter === 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



// Challenge 2: High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > cutoff ) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Challenge 3: Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    var average =  (sum / arr.length)

    var count = 0
    // count how many values are greated than the average
    for (var k=0; k<arr.length; k++) {
        if(arr[k]>average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// Challenge 4: Array Reverse
function reverse(arr) {
    // your code here
    for(var i=0; i<arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Challenge 5: Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    while(fibArr.length < n) {
        var i= fibArr[fibArr.length-1];
        var k= fibArr[fibArr.length-2];
        fibArr.push(i+k);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
