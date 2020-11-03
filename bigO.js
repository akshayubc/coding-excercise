// Calculate the BigO Notation Step-by-step: 

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

//Answer 

function funChallenge(input) {
  let a = 10; // O(1) Runs once
  a = 50 + 3; // O(1) Runs once

  for (let i = 0; i < input.length; i++) { // O(n) Runs as many times the loop condition permits
    anotherFunction();                    // O(n) Runs as many times the loop condition permits
    let stranger = true;                  // O(n) Runs as many times the loop condition permits
    a++;                                  // O(n) Runs as many times the loop condition permits
  }
  return a; // O(1)
}
/* Final answer: Big O(3+ 4n)
_______________________________________________________________________________
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; 
  let b = 10; 
  let c = 50; 
  for (let i = 0; i < input; i++) { 
    let x = i + 1; 
    let y = i + 2; 
    let z = i + 3; 

  }
  for (let j = 0; j < input; j++) { 
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know"; 
}
    
//Answer
//Similar to the first questions: 
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2;// O(n)
    let q = j * 2;// O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Final Answer: Big O(4+7n) 
//Note: Function loop statements can be counted or ignored. As a result, alternate way would render the answer Big o(4 + 5n)
_______________________________________________________________________________
