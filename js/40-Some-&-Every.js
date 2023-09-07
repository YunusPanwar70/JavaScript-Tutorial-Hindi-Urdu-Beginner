// Some

let ages = [10, 13, 18, 20];

let b = ages.some(check);

console.log(b);

function check(age) {
  return age >= 18;
}

// Evrey

let c = [1, 30, 39, 29, 10, 13];

let d = c.every(value);

console.log(d);

function value(sum) {
  return (sum) => 40;
}
