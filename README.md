# Loops-in-javascript
This project demonstrates JavaScript loops, including while, for, and do-while loops, along with break and continue statements. It provides examples to illustrate loop execution and control flow.
## Loops Covered
- **while loop**: Repeats a block of code as long as the condition is true.
- **for loop**: Ideal when the number of iterations is known.
- **do-while loop**: Executes the block at least once before checking the condition.
- **break statement**: Exits the loop prematurely.
- **continue statement**: Skips the current iteration and proceeds to the next.

## Example Code
```javascript
// While Loop Example
var x = 0;
console.log(x);
while (x <= 20) {
    x++;
    console.log(x + " * 2 = " + x * 2);
}
console.log('bye');

// For Loop Example
console.log('Hi');
for (var x = 0; x <= 50; x++) {
   console.log(x);
}
console.log("bye");

// Do-While Loop Example
var x = 1;
do {
    console.log("Hi");
    x++;
} while (x <= 10);
console.log("bye");

// Break Example
var i = 0;
while (i < 3) {
    console.log("hello", i);
    if (i % 2 == 1) {
        break;
    }
    i++;
}
console.log("Loop ends!");

// Continue Example
var i = 0;
while (i < 10) {
    console.log("All", i);
    i++;
    if (i % 2 == 1) continue;
    console.log("Even", i);
}
console.log("Loop ends!");
```

## How to Use
1. Copy and paste the code into a JavaScript file (e.g., `loops.js`).
2. Run it using Node.js or in a browser console to see how each loop works.

## License
This project is open-source and free to use under the MIT License.
