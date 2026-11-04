// Day 1 — Variables, arrays, objects, functions
// Read each Example, then write YOUR truck's version under the TODOs.
// See the results in the console (right-click the page → Inspect → Console).

// ---------- Step 1: Variables ----------
// Example:
// Create 3 variables using "let" or "const"
const exampleName = "Taco Rocket"; // string (text)
const exampleYears = 3; // number
const exampleIsOpen = true; // boolean (true or false)

// Log variables
console.log(exampleName, exampleYears, exampleIsOpen);
console.log(typeof exampleName); // typeof tells you the type

// TODO: Make 3 variables for YOUR truck: a name, a number, and a true/false.
const justACraving = "Just A craving";
const cravingYears = 5;
const cravingIsOpen = true;
// TODO: console.log them, and log the typeof each one.
console.log(justACraving, cravingYears, cravingIsOpen);
console.log(typeof justACraving);
console.log(typeof cravingYears);
console.log(typeof cravingIsOpen);

// ---------- Step 2: An array (a list) ----------
// Example:
const exampleMenu = ["taco", "burrito", "nachos"];
console.log(exampleMenu[0]); // first item: index 0
console.log(exampleMenu.length); // how many items

// TODO: Make an array of 3 or more things YOUR truck sells.
const cravingMenu = [
  "J.A.C. inferno burger",
  "loaded bacon fries",
  "chicken street tacos",
  "fresh-squeezed lemonade",
];
// TODO: Log the first item, the last item, and how many items there are.
console.log(cravingMenu[0]); // first item
console.log(cravingMenu[cravingMenu.length - 1]); // last item
console.log(cravingMenu.length); // how many items

// ---------- Step 3: An object (one thing with details) ----------
// Example:
const exampleItem = { name: "taco", price: 4.5, spicy: true };
console.log(exampleItem.name); // dot notation
console.log(exampleItem["price"]); // bracket notation

// TODO: Make an object for one of YOUR menu items (name, price, spicy).
const cravingItem = {
  name: "J.A.C. inferno burger",
  price: 11.99,
  spicy: true,
};
// TODO: Log one property with dot notation and one with bracket notation.
console.log(cravingItem.name); // dot notation
console.log(cravingItem["price"]); // bracket notation
// ---------- Step 4: A function ----------
// Example:
function addTip(price, tip) {
  return price + tip;
}
console.log(addTip(10, 2)); // 12

// TODO: Write a function orderTotal(price, quantity) that RETURNS price * quantity.
function orderTotal(price, quantity) {
  return price * quantity;
}
// TODO: Before you run it, guess what orderTotal(4.5, 3) gives. Then log it.
console.log(orderTotal(4.5, 3)); // 13.5
console.log(orderTotal(11.99, 2)); // 23.98
// ---------- Extra practice (if you finish early) ----------
// 1. Change your menu item's price AFTER you made the object, then log it again.
cravingItem.price = 10.99;
console.log(cravingItem.price);

// 2. Write isCheap(price): return "cheap!" if price is under 5, otherwise "fancy".
function isCheap(price) {
  return price < 5 ? "cheap!" : "fancy";
}
console.log(isCheap(4.5)); // "cheap!"
console.log(isCheap(11.99)); // "fancy"
