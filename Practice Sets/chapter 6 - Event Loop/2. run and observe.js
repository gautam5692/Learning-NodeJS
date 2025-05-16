console.log("1. Start of script");

// Microtask queue (Promise)
Promise.resolve().then(() => {
  console.log("2. Microtask 1");
});

// Timer queue
setTimeout(() => {
  console.log("3. Timer 1");
}, 0);

// I/O queue
const fs = require("fs");
fs.readFile("user-details.txt", () => {
  console.log("4. I/O Operation");
});

// Check queue
setImmediate(() => {
  "5. Immediate 1";
});

// Close queue
process.on("exit", () => {
  console.log("6. Exit event");
});

console.log("7. End of script");
