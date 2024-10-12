// Examine the usage of Set in JavaScript

// 1. Create an empty set
const s = new Set();

// 2. Add elements to the set
s.add(1);
s.add(2);
s.add("Hello");

// 3. Itrate over the set
for (let item of s) {
    console.log(item);
}

// 4. Add duplicate elements
s.add(1); // This will not be added to the set

// 5. Check if an element exists in the set
console.log(s.has(1)); // true
console.log(s.has(3)); // false

// 6. Remove an element from the set
s.delete(1);
s.delete(3); // This will not throw an error

s.forEach((item) => {
    console.log(item);
});

// 7. Add customised objects to the set
s.clear();
const obj1 = { name: "John" };
const obj2 = { name: "Jane" };
s.add(obj1);
s.add(obj2);
obj1.name = "Doe"; // This will not affect the set, as the object is stored by reference
console.log(s.has(obj1)); // true
console.log(s.has({ name: "Doe" })); // false
s.forEach((item) => {
    console.log(item);
});

// 8. Use customized fields of an object to check for existence
s.clear();
s.add({ name: "John" });
s.add({ name: "Jane" });

// 9. Insert class instances into the set
class Person {
    constructor(name) {
        this.name = name;
    }
}

const p1 = new Person("John");
const p2 = new Person("Jane");

s.add(p1);
s.add(p2);

s.forEach((item) => {
    console.log(item);
});

p1.name = "Doe"; // This will not affect the set, as the object is stored by reference

console.log(s.has(p1)); // true
console.log(s.has(new Person("Doe"))); // false

// 10. Use the size property to get the number of elements in the set
console.log(s.size); // 2
