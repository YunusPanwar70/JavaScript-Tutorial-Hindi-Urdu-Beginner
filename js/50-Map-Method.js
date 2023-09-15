// One

let a = [1, 2, 3, 4, 5];

console.log(a);

let b = a.map((num) => num * 10);

console.log(b);

// Two

let c = [10, 20, 30, 40, 50];

console.log(c);

let d = c.map(check);

function check(arr) {
  return arr * 10;
}

// Three

let e = [
  { Fname: "Yunus", Lname: "Panwar" },
  { Fname: "Amaan", Lname: "Tak" },
  { Fname: "Mohin", Lname: "Khan" },
];

console.log(e);

let f = e.map(check1);

console.log(f);

function check1(arr1) {
  return arr1.Fname + " " + arr1.Lname;
}
