let arr = [1, 2, 3];
let a, b, c;
[a, b, c] = arr;
console.log(a, b, c);

// Destructuring with the spread operator

let flavours = ["choco", "vanilla", "orange", "coffee"];
let [first, ...rest] = flavours;

console.log(rest.join(", "));

// Restructuring with spread operator
let peaks = ["Tallac", "Ralston", "Rose"];
let canyons = ["Ward", "Blackwood"];
let place = [...peaks, ...canyons];

console.log(place.join(", "));

let morning = {
  breakfast: "oatmeal",
  lunch: "butter and jam"
};

let dinner = "veg and cheese";

// ES6 Restructing
let backpackingMeals = {
  ...morning,
  dinner
};

console.log(backpackingMeals);
