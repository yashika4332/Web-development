// Question 4 - Store Inventory using Map

let inventory = new Map();

inventory.set("apples", 500);
inventory.set("bananas", 300);
inventory.set("oranges", 200);

// original
console.log(inventory);

// new product
inventory.set("grapes", 250);

// Update 
inventory.set("bananas", 350);

// Retrieve 
console.log( inventory.get("apples"));

// Check 
console.log(inventory.has("oranges"));

// Remove 
inventory.delete("oranges");

// Number of entries
console.log( inventory.size);

// Product names

for (let key of inventory.keys()) {
    console.log(key);
}

// Quantities

for (let value of inventory.values()) {
    console.log(value);
}

// Print all entries

inventory.forEach(function(quantity, product) {
    console.log(product + " : " + quantity);
});

// Empty inventory
inventory.clear();

console.log("Final Size:", inventory.size);



