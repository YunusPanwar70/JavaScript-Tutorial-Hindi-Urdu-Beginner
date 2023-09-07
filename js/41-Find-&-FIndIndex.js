// Find

let a = [10, 23, 19, 20];

let b = a.find(check);

console.log(b);

function check(age) {
  return age >= 18;
}

// Findindex

let c = [10, 2, 19, 20];

let d = c.findIndex(value);

console.log(d);

function value(num) {
  return num >= 18;
}
