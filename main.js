function enterPrompt() {
  var result;
  do {
    result = prompt("enter number", 0);
  } while (result && result < 100);
}
enterPrompt();
function naturalNumbers(number) {
  var result = [];
  var fix;
  for (var i = 2; i <= number; i++) {
    fix = 1;
    for (var j = i - 1; j > 1; j--) {
      if (i % j == 0) {
        fix = 0;
      }
    }
    if (fix) {
      result.push(i);
    }
  }
  return result;
}
console.log(naturalNumbers(10));

function ifFizzBuzz(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

ifFizzBuzz(100);

function findSymbol(yourString, yourSymbol) {
  yourString = yourString.toLowerCase();
  yourSymbol = yourSymbol.toLowerCase();
  var result = 0;
  for (var i = 0; i <= yourString.length; i++) {
    yourString[i] === yourSymbol ? result++ : result;
  }
  console.log(result);
}
findSymbol("yYYtryYing", "y");

function minMax(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(minMax(2, 5));
console.log(minMax(1, 9));
console.log(minMax(1, 55));

function fibonacci(n) {
  var result = [0, 1],
    x = 1,
    y = 0;
  if (n == 1) {
    return result;
  } else if (n == 0) {
    return (result = result[0]);
  }
  for (var i = 1; i < n; i++) {
    result.push(y + x);
    y = x;
    x = result[result.length - 1];
  }
  return result;
}

console.log(fibonacci(10));
console.log(fibonacci(1));
console.log(fibonacci(0));

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log(fib(10));

function reverseString(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log("string =>", reverseString("string"));
