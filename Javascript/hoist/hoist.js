//  Hoist Practice Assignment

// Problem 1.
console.log(hello);                                   
var hello = 'world';                                 
// predicted output: world
// actual output: undefined

// Problem 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// predicted output: magnet
// actual output: magnet

// Problem 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// predicted output: super cool
// actual output: super cool

// Problem 4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// predicted output: chicken , half-chicken
// actual output: chicken , half-chicken

// Problem 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// predicted output: chicken chicken fish fish
// actual output: TypeError: mean is not a function

// Problem 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// predicted output:rock , r&b , disco
// actual output: undefined , rock , r&b , disco

// Problem 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// predicted output: san jose , seattle , burbank , san jose
// actual output: san jose , seattle , burbank , san jose

// Problem 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// predicted output: error, dojo was already defined with const
// actual output:{ name: 'Chicago', students: 65, hiring: true }, error

