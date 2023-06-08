function pizzaOven(crustType, sauceType, cheeses, toppings) {
    
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizzaForBob = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Bob's pizza order is: ", pizzaForBob);

var pizzaForKaren = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Karen's pizza order is: ", pizzaForKaren);

var pizzaForNick = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["pineapple", "ham"]);
console.log("Nick's pizza order is: ", pizzaForNick);

var pizzaForKatie = pizzaOven("hand tossed", "marinara", ["mozzarella", "ricotta"], ["basil", "onions", "garlic"]);
console.log("Katie's pizza order is: ", pizzaForKatie);
