import { HashMap } from "./hash-map.js";

// Create a new instance of the hash map with a load factor of 0.75
const test = HashMap();

// Populate the hash map using set(key, value) method
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// Check the length of the hash map to confirm it is at full capacity
console.log(`Length of hash map: ${test.getLength()}`); // Should print 12

// Overwrite a few nodes
test.set('apple', 'green'); // Overwriting 'apple'
test.set('banana', 'ripe'); // Overwriting 'banana'

// Check values after overwriting
console.log(`Updated apple: ${test.get('apple')}`); // Should print 'green'
console.log(`Updated banana: ${test.get('banana')}`); // Should print 'ripe'

// Add another item to trigger resizing
test.set('moon', 'silver');

// Check the new capacity
console.log(`Capacity of hash map after adding 'moon': ${test.getCapacity()}`); // Should be double of before

// Test the distribution of keys after resizing
console.log('Keys in the hash map:', test.keys()); // Should show all keys, including 'moon'

// Overwrite a few nodes again after resizing
test.set('carrot', 'yellow-orange'); // Overwriting 'carrot'
test.set('dog', 'dark brown'); // Overwriting 'dog'

// Test other methods to check if they are still functioning correctly
console.log(`Get value of 'carrot': ${test.get('carrot')}`); // Should print 'yellow-orange'
console.log(`Does the hash map have 'frog'? ${test.has('frog')}`); // Should print true
console.log(`Removing 'hat': ${test.remove('hat')}`); // Should print true
console.log(`Length after removing 'hat': ${test.getLength()}`); // Should decrease by 1
console.log(`Keys after removal: ${test.keys()}`); // Should not include 'hat'
console.log(`Clearing hash map...`);
test.clear();
console.log(`Length after clearing: ${test.getLength()}`); // Should print 0
console.log(`Keys after clearing: ${test.keys()}`); // Should print an empty array