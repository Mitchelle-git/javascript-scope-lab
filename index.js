// Write your solution in this file
const Burgers =[`hamburger`,`cheeseburger`];
let featureDrink=[`strawberryMilkshake`];

function addBurger(){
    const newBurger=`flatBurger`;
    Burgers.push(newBurger);
}

addBurger();
console.log(Burgers);

if (true){
    const anotherNewBurger = 'Maple Bacon Burger';
    Burgers.push(anotherNewBurger);
}

function changeFeaturedDrink(){
 featureDrink='The JavaShake';
}

addBurger();
changeFeaturedDrink();

console.log (Burgers);
console.log (featureDrink);


