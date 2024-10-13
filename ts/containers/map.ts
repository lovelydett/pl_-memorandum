// Examine the usage of Map in TypeScript

// Create a map from string to number
const map = new Map<string, number>();

// 1. Set key-value pair with right type
map.set("key1", 1);

// 2. Get value by key
let res: number | undefined = map.get("key1");
console.log(res); // 1

// 3. Check if key exists
console.log(map.has("key1")); // true

// 4. Get value with wrong type will be a compile error
// res = map.get(2); // Error: Argument of type '2' is not assignable to parameter of type 'string'
