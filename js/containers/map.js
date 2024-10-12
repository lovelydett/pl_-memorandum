// Examine the usage of Map in JavaScript

// 1. Create an empty map
const m = new Map();

// 2. Add elements to the map
m.set("key3", "value3");
m.set("key1", "value1");
m.set("key2", "value2");

// 3. Iterate over the map
for (let [key, value] of m) {
    console.log(key, value);
}

// 4. Delete an element from the map
m.delete("key1");
m.forEach((value, key) => {
    console.log(key, value);
});

// 5. Use customized hash functions
m.clear();
const obj1 = { name: "John" };
const obj2 = { name: "Jane" };
m.set(obj1.name, { obj: obj1, val: "value1" });
m.set(obj2.name, { obj: obj2, val: "value2" });
obj1.name = "Doe"; // This will not affect the map, as the object is stored by reference

m.forEach((value, key) => {
    console.log(key, value);
});

// 6. Check if a key exists in the map
console.log(m.has("John")); // true

// 7. Get value with key
console.log(m.get("John")); // { obj: { name: 'John' }, val: 'value1' }
