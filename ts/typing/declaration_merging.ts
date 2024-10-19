interface Person {
    name: string;
}

let p1: Person = { name: "Alice" };

// Extend the Person interface
interface Person {
    age?: number;
}

let p2: Person = { name: "Bob", age: 20 };

// Both p1 and p2 are valid
console.log(p1.age); // undefined
console.log(p2.age); // 20
