function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]
function filterPeopleOver30(peopleArray) {
    return peopleArray.filter(person => person.age > 30);
}

// Example usage:
const people = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' },
    { name: 'Charlie', age: 28, email: 'charlie@example.com' }
];

const peopleOver30 = filterPeopleOver30(people);
console.log(peopleOver30);
// Output: [{ name: 'Bob', age: 35, email: 'bob@example.com' }]
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.size()); // Output: 1
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.size()); // Output: 1
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const inputString = 'Hello, World!';
const stringWithoutVowels = removeVowels(inputString);
console.log(stringWithoutVowels); // Output: 'Hll, Wrld!'
function mergeUniqueArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    return [...new Set(mergedArray)];
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const mergedArray = mergeUniqueArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]
