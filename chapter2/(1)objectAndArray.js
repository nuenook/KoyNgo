var car = {type:"Fiat", model:"500", color:"white"};
//type = property
// Fiat = value
// { } object range

//assigns new property in object
car.name = "toyota";
// or
car["name"] = "toyota";

// modify value in property

car.model = "650";
car["color"] = "yellow";

// show all object
console.log(car);

// show only color
console.log(car["color"]);

// show only type
console.log(car.type);

// ****** ARRAY *******
//declare a array 
var array = [];

//assign values
array = [1, 2, 3, 4, 5, "6"];

//show array
console.log(array);

//show array position at 3
console.log(array[3]);

// modify value in array
array[3] = 5;
console.log(array[3]);

/* 
    array of object 
    many or one more objects in same class 
*/

var carList = [];
carList.push(car); //  assign a first car on top to array

var newCar = {type:"Low", model:"250", color:"red", name: "Honda"};
carList.push(newCar); // assign second car

//show all cars
console.log(carList);

//show only first car
console.log(carList[0]);

// show second car's name 
console.log(carList[1].name);

// show color of first car
console.log(carList[0]["color"]);

// show only car name for both
for (var i = 0 ; i < carList.length ; i++) // loop for
    console.log(carList[i].name + ", ");
//or
carList.forEach(car => { // loop foreach use callback !!!
    console.log(car.name + ", ");
});
