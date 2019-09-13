function add(num1, num2) {
  // assert type
  let typeNum1 = typeof num1;
  let typeNum2 = typeof num2;

  if ((typeNum1 != Number) || (typeNum2 != Number)) {
    return new TypeError(`Invalid parameters provided expected numbers, but recieved types of ${typeNum1} & ${typeNum2}`);
  }
  return (num1 + num2);
}

function testSum() {
  // add the two numbers
  let sum = add(1, 3);
  if (sum != 4) {
    return console.log(`TEST FAILED : Incorrect sum returned. Expected 4, instead returned ${sum}.`);
  } else {
    return console.log("TEST PASSED: Correct sum returned.");
  };
}

function testNegativeNumbers() {
  let sum = add(-1, -7);
  if (sum != -8) {
    return console.log(`TEST FAILED : Incorrect sum returned. Expected -8, instead returned ${sum}.`);
  } else {
    return console.log("TEST PASSED: Correct sum returned.");
  };
}

function testNonIntegers(params) {
  let sum = add("X", "WRONG");

  let result = (sum instanceof TypeError);
  if (result != true) {
    return console.log(`TEST FAILED : Incorrect error detected. Expected a TypeError, instead the test returned ${result}.`);
  } else {
    return console.log("TEST PASSED: TypeError returned correctly.");
  };
}

// assert that the expected sum is returned when we add 1 and 3
testSum();
// assert that negative numbers are handled correctly
testNegativeNumbers();
// assert that sumbitting non-ints returns an error message
testNonIntegers();