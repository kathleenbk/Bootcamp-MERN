//Print odds 1-20
for (var i=1; i<=20; i+=2) {
    console.log(i);
}

//Decreasing multiples of 3
for (var i=100; i>=0; i--) {
    if (i%3 == 0) {
        console.log(i);
    }
}

//Print the Sequence
for (var i=4; i>-4; i-=1.5) {
    console.log(i)
}

//Sigma
var sum=0;
for (i=0; i<=100;i++) {
    sum = sum + i;
}
console.log(sum);

//Factorial
var product=1;
for (i=1; i<=12; i++) {
    product = product * i;
}
console.log(product);