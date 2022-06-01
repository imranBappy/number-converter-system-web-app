// const input = require('./input');
function input(label) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // while (true) {
  //     console.log({inputData});
  //     if (inputData) {
  //
  //     }
  // }
  console.log(label);
  while (true) {
    readline.question("", (data) => {
      if (data) {
        readline.close();
        return inputData;
      }
    });
  }
}

let name = input("Enter your name : ");
console.log({ name });

// console.log('end');
