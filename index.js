// Write your solution in this file
const Burgers =["Hamburger","Cheeseburger"];
let featureDrink=["Strawberry Milkshake"];

function addBurger(){
    const newBurger="Flatburger";
    Burgers.push(newBurger);
}

addBurger();
console.log(Burgers);

if(true){
    const anotherNewBurger = "Maple Bacon Burger";
    Burgers.push(anotherNewBurger);
}

function changeFeaturedDrink(){
 featureDrink="The JavaShake";
}


changeFeaturedDrink();
console.log(featureDrink)




